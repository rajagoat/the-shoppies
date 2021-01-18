import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import ReactLoading from 'react-loading';
import SearchMovies from './SearchMovies';

const API_KEY = 'da1f5ac0';

function Cards() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('Star Wars');

    useEffect(() => {
        setLoading(true);
        setError(null);
        setData(null);

        fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
            .then(resp => resp)
            .then(resp => resp.json())
            .then(response => {
                if (response.Response === 'False') {
                    setError(response.Error);
                } else {
                    setData(response.Search);
                }

                setLoading(false);
            })
            .catch(({ message }) => {
                setError(message);
                setLoading(false);
            })
    }, [query]);

    return (
        <div>
            <h1>Check out these EPIC movies!</h1>
            <SearchMovies searchHandler={(setQuery)} />
            <div>
                <div>
                    {loading && <ReactLoading />}
                    {error !== null &&
                        <div style={{ margin: '20 px 0' }}>
                            <alert message={error} type='error' />
                        </div>
                    }
                    <ul>
                        {data !== null && data.length > 0 ? data.map((result, index) => (
                            <MovieCard 
                                key={index}
                                {...result}
                            />
                        )) : (
                            <p>Couldn't find any movies with that name.</p>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
