import React from 'react';

function SearchMovies({searchHandler}) {
    return (
        <div>
            <input 
                type="text" 
                placeholder="Find your favourite movies here" 
                onChange={e => searchHandler(e.target.value)} 
            />
        </div>
    )
}

export default SearchMovies;
