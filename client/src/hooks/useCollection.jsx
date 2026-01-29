import { useEffect, useState } from "react";
import axios from 'axios';

export function useCollection(collection) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        async function run() {
            setLoading(true);
            setError(null);

            try {
                const res = await axios.get(`/api/${collection}`);
                if(!cancelled) setData(res.data);
            } catch (e) {
                if(!cancelled) setError(e);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        run();
        return () => {
            cancelled = true;
        };
    }, [collection]);

    return { data, loading, error};
}