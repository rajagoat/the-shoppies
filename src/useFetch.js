import { useState, useEffect } from 'react';
import { trackPromise } from 'react-promise-tracker';

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        trackPromise(
                fetch(url)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    // console.log(data);
                })
        )
    }, [url]);

    return { data };
}

export default useFetch;