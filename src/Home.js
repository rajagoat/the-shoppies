import { useState } from 'react';
import CardList from './CardList';
import Modal from './Modal';
import Search from "./Search"

const Home = ({nomData}) => {
    const [movie, setMovie] = useState('Star Wars');
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState('');
    const [page, setPage] = useState('1');

    return (
        <div className="home">
            <h2>Find and nominate your favourite movies <br /> for the annual Shoppies!</h2>
            <Search setMovie={setMovie} page={page} setPage={setPage}/>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                id={id}
                setId={setId}
                nomData={nomData}
            />
            <CardList
                movie={movie}
                setShowModal={setShowModal}
                setId={setId}
                page={page}
                setPage={setPage}
            />
        </div>
    );
}

export default Home;