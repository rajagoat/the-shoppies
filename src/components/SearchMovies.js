import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './MovieCard.css';

function SearchMovies({searchHandler}) {
    return (
        <div>
            <input 
                type="text" 
                placeholder="Find your favourite movies here" 
                onChange={e => searchHandler(e.target.value)} 
            />
            <button type='submit'>
                <FaSearch />
            </button>
        </div>
    )
}

export default SearchMovies;
