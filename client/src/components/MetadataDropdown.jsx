// MetadataDropdown.jsx
import { useEffect, useMemo, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
} from "reactstrap";

export default function MetadataDropdown({ collection, onSelect }) {
  const [facets, setFacets] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  useEffect(() => {
    let alive = true;

    async function run() {
      try {
        setLoading(true);
        setErrorMsg("");

        const url = `/api/${collection}/facets`;
        const res = await fetch(url);

        // Safe parse (handles non-JSON / empty bodies)
        const text = await res.text();
        let json = null;
        try {
          json = text ? JSON.parse(text) : null;
        } catch {
          json = null;
        }

        if (!res.ok) {
          const msg =
            (json && (json.error || json.message)) ||
            (text && text.slice(0, 140)) ||
            `HTTP ${res.status}`;
          throw new Error(msg);
        }

        // Accept either:
        // 1) bare object: { tech:[], skill:[], discipline:[] }
        // 2) wrapped: { facets: { ... } }
        const nextFacets =
          (json &&
            typeof json === "object" &&
            (json.facets && typeof json.facets === "object"
              ? json.facets
              : json)) ||
          {};

        if (!alive) return;
        setFacets(nextFacets);
      } catch (e) {
        if (!alive) return;
        setFacets({});
        setErrorMsg(e?.message ? String(e.message) : "Failed to load facets");
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    }

    if (collection) run();
    else {
      setFacets({});
      setLoading(false);
      setErrorMsg("");
    }

    return () => {
      alive = false;
    };
  }, [collection]);

  const groups = useMemo(() => {
    const entries = Object.entries(facets || {});
    // Keep only groups whose value is an array
    return entries
      .map(([k, v]) => [k, Array.isArray(v) ? v : []])
      .filter(([k, arr]) => typeof k === "string" && k.length > 0 && arr.length >= 0);
  }, [facets]);

  function toggleDropdown() {
    setIsOpen((v) => !v);
  }

  function toggleGroup(groupName) {
    setOpenGroup((cur) => (cur === groupName ? null : groupName));
  }

  function handlePick(group, tag) {
    if (typeof onSelect === "function") onSelect({ group, tag });
    setIsOpen(false);
  }

  return (
    <Dropdown isOpen={isOpen} toggle={toggleDropdown}>
      <DropdownToggle caret disabled={!collection || loading}>
        {loading ? "Loading..." : "Filter"}
      </DropdownToggle>

      <DropdownMenu style={{ minWidth: 280 }}>
        {errorMsg ? (
          <DropdownItem toggle={false} disabled>
            {errorMsg}
          </DropdownItem>
        ) : null}

        {!loading && !errorMsg && groups.length === 0 ? (
          <DropdownItem toggle={false} disabled>
            (no facets)
          </DropdownItem>
        ) : null}

        {groups.map(([groupName, tags]) => {
          const expanded = openGroup === groupName;

          return (
            <div key={groupName}>
              <DropdownItem toggle={false} onClick={() => toggleGroup(groupName)}>
                {expanded ? "[-] " : "[+] "}
                {groupName}
              </DropdownItem>

              <Collapse isOpen={expanded}>
                {tags.length === 0 ? (
                  <DropdownItem toggle={false} disabled style={{ paddingLeft: 24 }}>
                    (none)
                  </DropdownItem>
                ) : (
                  tags.map((tag) => (
                    <DropdownItem
                      key={`${groupName}:${tag}`}
                      toggle={true}
                      onClick={() => handlePick(groupName, tag)}
                      style={{ paddingLeft: 24 }}
                    >
                      {tag}
                    </DropdownItem>
                  ))
                )}
              </Collapse>

              <DropdownItem divider />
            </div>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}
