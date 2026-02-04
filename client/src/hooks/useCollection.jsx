// hooks/useCollection.js
import { useEffect, useMemo, useState } from 'react';

const ALLOWED_KEYS = new Set(['tagKey', 'tagValue', 'sort', 'dir', 'page', 'limit']);

function normalizeOptions(opts) {
  const o = opts || {};
  const out = {};

  for (const k of Object.keys(o)) {
    if (!ALLOWED_KEYS.has(k)) continue;
    const v = o[k];
    if (v === undefined || v === null || v === '') continue;
    out[k] = String(v);
  }

  // enforce pairing to avoid silent 'return all'
  const hasKey = out.tagKey !== undefined;
  const hasVal = out.tagValue !== undefined;
  if (hasKey !== hasVal) {
    delete out.tagKey;
    delete out.tagValue;
  }

  return out;
}

function buildQueryString(opts) {
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries(opts)) params.set(k, v);
  const s = params.toString();
  return s ? `?${s}` : '';
}

export function useCollection(collection, options) {
  const [items, setItems] = useState([]);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 12 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const norm = useMemo(() => normalizeOptions(options), [options]);
  const qs = useMemo(() => buildQueryString(norm), [norm]);
  const url = useMemo(() => `/api/${collection}${qs}`, [collection, qs]);

  useEffect(() => {
    let alive = true;

    async function run() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(url);
        const json = await res.json();

        if (!res.ok) throw new Error(json?.error || `HTTP ${res.status}`);

        const arr = Array.isArray(json) ? json : (json.items ?? []);
        const m = Array.isArray(json) ? null : json;

        if (!alive) return;
        setItems(arr);
        if (m) {
          setMeta({
            total: m.total ?? 0,
            page: m.page ?? 1,
            limit: m.limit ?? 12,
          });
        }
      } catch (e) {
        if (!alive) return;
        setError(e);
        setItems([]);
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    }

    run();
    return () => { alive = false; };
  }, [url]);

  return { items, meta, loading, error, url };
}
