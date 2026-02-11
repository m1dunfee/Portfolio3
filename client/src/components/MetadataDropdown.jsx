import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useCollectionFromPath } from '../hooks/useCollectionFromPath';

export default function MetadataDropdown() {
  const { collection } = useCollectionFromPath();
  const [sp, setSp] = useSearchParams();

  const allowed = useMemo(() => new Set(['projects', 'topics', 'prospects', 'books']), []);
  const enabled = collection != null && allowed.has(collection);

  const [open, setOpen] = useState(false);
  const [facets, setFacets] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggle = () => setOpen((v) => !v);

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
        setFacets(json && typeof json === 'object' ? json : {});
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
  }, [enabled, collection]);

  const groups = useMemo(() => {
    const obj = facets && typeof facets === 'object' ? facets : {};
    return Object.keys(obj);
  }, [facets]);

  const setSelection = (group, tag) => {
    const next = new URLSearchParams(sp);
    next.set('tagKey', group);
    next.set('tagValue', tag);
    next.delete('page'); // optional future paging reset
    setSp(next);
    setOpen(false);
  };

  const clearSelection = () => {
    const next = new URLSearchParams(sp);
    next.delete('tagKey');
    next.delete('tagValue');
    next.delete('page');
    setSp(next);
    setOpen(false);
  };

  if (!enabled) return null;

  return (
    <Dropdown isOpen={open} toggle={toggle}>
      <DropdownToggle caret disabled={loading}>
        {loading ? 'Loading...' : 'Filter'}
      </DropdownToggle>

      <DropdownMenu>
        <DropdownItem onClick={clearSelection}>Clear filters</DropdownItem>
        <DropdownItem divider />

        {error ? <DropdownItem disabled>{String(error)}</DropdownItem> : null}

        {!loading && groups.length === 0 ? (
          <DropdownItem disabled>No filters</DropdownItem>
        ) : null}

        {groups.map((group) => {
          const values = Array.isArray(facets?.[group]) ? facets[group] : [];
          if (values.length === 0) return null;

          return (
            <React.Fragment key={group}>
              <DropdownItem header>{group}</DropdownItem>
              {values.map((tag) => (
                <DropdownItem
                  key={`${group}:${tag}`}
                  onClick={() => setSelection(group, tag)}
                >
                  {tag}
                </DropdownItem>
              ))}
            </React.Fragment>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}
