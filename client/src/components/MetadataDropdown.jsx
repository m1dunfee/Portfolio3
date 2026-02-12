import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useCollectionFromPath } from "../hooks/useCollectionFromPath";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
} from "reactstrap";

export default function MetadataDropdown() {
  const { collection } = useCollectionFromPath();
  const [sp, setSp] = useSearchParams();

  const allowed = useMemo( () => new Set(["projects", "topics", "prospects", "books"]), []);
  const enabled = collection != null && allowed.has(collection);

  const [open, setOpen] = useState(false);          // dropdown open/close
  const [openGroup, setOpenGroup] = useState(null); // one group at a time

  const [facets, setFacets] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleDropdown = () => setOpen((v) => !v);

  const toggleGroup = (groupName) => {
    setOpenGroup((cur) => (cur === groupName ? null : groupName));
  };

  useEffect(() => {
    let alive = true;

    async function run() {
      if (!enabled) return;

      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`/api/${collection}/facets`);
        const json = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(json?.error || `HTTP ${res.status}`);

        if (!alive) return;

        const nextFacets = json && typeof json === "object" ? json : {};
        setFacets(nextFacets);

      } catch (e) {
        if (!alive) return;
        setFacets(null);
        setError(e instanceof Error ? e.message : String(e));
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    }

    run();
    return () => {
      alive = false;
    };
    // leaving sp out is fine; this runs when collection changes
  }, [enabled, collection]); // eslint-disable-line react-hooks/exhaustive-deps

  const groups = useMemo(() => {
    const obj = facets && typeof facets === "object" ? facets : {};
    // Optional: fixed order if you want
    // const order = ["discipline", "tech", "skill"];
    // return order.filter((k) => Array.isArray(obj[k]) && obj[k].length > 0);
    return Object.keys(obj);
  }, [facets]);

  const setSelection = (group, tag) => {
    const next = new URLSearchParams(sp);
    next.set("tagKey", group);
    next.set("tagValue", tag);
    next.delete("page");
    setSp(next);
    setOpen(false);
  };

  const clearSelection = () => {
    const next = new URLSearchParams(sp);
    next.delete("tagKey");
    next.delete("tagValue");
    next.delete("page");
    setSp(next);
    setOpen(false);
  };

  if (!enabled) return null;

  return (
    <Dropdown isOpen={open} toggle={toggleDropdown}>
      <DropdownToggle caret disabled={loading}>
        {loading ? "Loading..." : "Filter"}
      </DropdownToggle>

      <DropdownMenu style={{ minWidth: 320 }}>
        <DropdownItem onClick={clearSelection}>Clear filters</DropdownItem>
        <DropdownItem divider />

        {error ? <DropdownItem disabled>{String(error)}</DropdownItem> : null}
        {!loading && groups.length === 0 ? (
          <DropdownItem disabled>No filters</DropdownItem>
        ) : null}

        {groups.map((groupName) => {
          const values = Array.isArray(facets?.[groupName]) ? facets[groupName] : [];
          if (values.length === 0) return null;

          const expanded = openGroup === groupName;

          return (
            <React.Fragment key={groupName}>
              {/* IMPORTANT: toggle={false} so clicking does NOT close the dropdown */}
              <DropdownItem toggle={false} onClick={() => toggleGroup(groupName)}>
                {expanded ? "[-] " : "[+] "}
                {groupName} ({values.length})
              </DropdownItem>

              <Collapse isOpen={expanded}>
                {values.map((tag) => (
                  <DropdownItem
                    key={`${groupName}:${tag}`}
                    className="ps-4"
                    onClick={() => setSelection(groupName, tag)}
                  >
                    {tag}
                  </DropdownItem>
                ))}
              </Collapse>

              <DropdownItem divider />
            </React.Fragment>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}
