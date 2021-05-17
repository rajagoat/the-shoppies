import { useState } from 'react';
import CardList from './CardList';

import Search from "./Search"

const Home = () => {
    const [movie, setMovie] = useState('Star Wars');

    return (
        <div className="home">
            <h2>Find and nominate your favourite movies <br /> for the annual Shoppies!</h2>
            <Search setMovie={setMovie} />
            <CardList movie={movie} />
        </div>
    );
}

export default Home;