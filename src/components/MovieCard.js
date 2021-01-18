import React from 'react';
import './MovieCard.css';

function MovieCard({ Title, Poster }) {
    
    return (
        <div className='movie-card-container'>
            <div className="image-container">
                <div className="bg-image">
                    <img
                        src={Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : Poster}
                        alt={Title}
                    />
                </div>
            </div>
            <div className="movie-info">
                <h2>Movie Details</h2>
                <div>
                    <h1>{Title}</h1>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
