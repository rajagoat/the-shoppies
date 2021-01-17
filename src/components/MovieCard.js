import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function MovieCard({Title, Poster, Type}) {
    return (
        <div>
            <li className='cards-item'>
                <Link className='cards-item-link'>
                    <figure className='cards-item-pick-wrap'>
                        <img 
                            className='cards-item-img'
                            src={Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : Poster} 
                            alt={Title}
                        />
                        <div>
                            <h1>{Title}</h1>
                        <meta
                            className='cards-item-info'
                            title={Title}
                            description={false}
                        />
                    </div>
                    </figure>
                </Link>
            </li>
        </div>
    )
};

export default MovieCard;
