
import { useState, useEffect } from 'react'

export const useFetch = (url, options = {}) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            const response = await fetch(url, {
                method: options.method || 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                body: options.body ? JSON.stringify(options.body) : null
            });

            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const jsonData = response.json();
            setData(jsonData);
            setLoading(false);
        }
        catch (e) {
            setError(e);
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchData();

    }, [url, options])

    return { data, loading, error }

}