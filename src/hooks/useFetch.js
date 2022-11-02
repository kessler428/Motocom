import { useEffect, useState } from 'react'
import { fetchConToken } from '../helpers/fecth';

export const useFetch = (url) => {
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getDatos = async () => {
            try {
                const resp = await fetchConToken(url);
                const body = await resp.json();
                setDatos(body);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        getDatos();
    }, [url]);

    return {datos, loading, error};
}