import { useState } from 'react';
import Modal from './Modal';

const Nominations = ({ nomData }) => {
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState('');
    
    const emptyNoms = [];
    for (let i = nomData.length; i < 5; i++) {
        emptyNoms.push(i);
    }

    const handleClick = (id) => {
        setShowModal(true);
        // console.log(id);
        setId(id);
    }

    const clearData = () => {
        for (let i = 0; i < nomData.length; i++) {
            nomData.pop();
        }
        window.location.reload();
    }

    return (
        <div className="nominations">
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                id={id}
                setId={setId}
                nomData={nomData}
            />
            <h1 className="nominations-title">Your Nominations:</h1>
            <div className="nominations-grid">
                {nomData && nomData.map(nom => (
                    <li className="card" key={`${nom.imdbID}`} onClick={() => handleClick(nom.imdbID)}>
                        <img className="poster" src={`${nom.Poster}`} alt="Movie Poster" />
                        <div className="container">
                            <h3 className="title">{nom.Title}</h3>
                            <p className="year">{nom.Year}</p>
                        </div>
                    </li>
                ))}
                {emptyNoms.length !== 0 && emptyNoms.map(emptyNom => (
                    <li className="empty" key={emptyNom}>
                        <h3>Missing Nomination</h3>
                    </li>
                ))}
            </div>
            {nomData.length !== 0 && <button onClick={clearData}>Clear All</button>}
        </div>
    );
}

export default Nominations;