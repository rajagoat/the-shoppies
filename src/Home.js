import { useState } from 'react';
import CardList from './CardList';
import Modal from './Modal';

import Search from "./Search"

const Home = () => {
    const [movie, setMovie] = useState('Star Wars');
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState('');

    return (
        <div className="home">
            <h2>Find and nominate your favourite movies <br /> for the annual Shoppies!</h2>
            <Search setMovie={setMovie} />
            <Modal showModal={showModal} setShowModal={setShowModal} id={id} setId={setId}/>
            <CardList movie={movie} setShowModal={setShowModal} setId={setId}/>
        </div>
    );
}

export default Home;