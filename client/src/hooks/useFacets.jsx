import { useEffect, useMemo, useState } from "react";

export function useFacets(collection) {
  const [facets, setFacets] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = useMemo(() => `/api/${collection}/facets`, [collection]);

  useEffect(() => {
    let alive = true;

    async function run() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(url);
        const json = await res.json();

        if (!res.ok) throw new Error(json?.error || `HTTP ${res.status}`);

        if (!alive) return;
        setFacets(json && typeof json === "object" ? json : {});
      } catch (e) {
        if (!alive) return;
        setError(e);
        setFacets({});
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    }

    if (collection) run();
    else {
      setFacets({});
      setLoading(false);
      setError(null);
    }

    return () => {
      alive = false;
    };
  }, [url, collection]);

  return { facets, loading, error, url };
}
