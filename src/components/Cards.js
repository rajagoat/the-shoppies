import React from 'react';
import MovieCard from './MovieCard';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC movies!</h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <MovieCard 
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        />
                        <MovieCard 
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        />
                        <MovieCard 
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        />
                        <MovieCard 
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        />
                        <MovieCard 
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        />
                    </ul>
                    <ul className='cards-items'>
                        <MovieCard 
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        />
                        <MovieCard 
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        />
                        <MovieCard 
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        />
                        <MovieCard 
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        />
                        <MovieCard 
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
