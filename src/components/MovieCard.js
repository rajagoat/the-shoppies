import React from 'react';
import { Link } from 'react-router-dom';

const API_KEY = 'da1f5ac0';

function MovieCard(props) {
    return (
        <>
            <li className='cards-item'>
                <Link className='cards-item-link'>
                    <figure className='cards-item-pick-wrap' data-category={props.label}>
                        <img src='/' alt='Travel' className='cards-item-img'/>
                    </figure>
                    <div className='cards-item-info'>
                        <h5 className='cards-item-text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
};

export default MovieCard;
