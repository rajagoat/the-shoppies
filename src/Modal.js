// import { useEffect } from "react";
import NA from './img/NA.svg';
import { motion, AnimatePresence } from 'framer-motion';
import useFetch from './useFetch';
import exitIcon from './img/exit-icon.svg';
import closedIcon from './img/closed-icon.svg';
import openIcon from './img/open-icon.svg';
import { useState, useEffect } from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loading from './Loading';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
};

const Modal = ({ showModal, setShowModal, id, setId, nomData }) => {
    const API = `http://www.omdbapi.com/?i=${id}&apikey=da1f5ac0&plot=short`;
    // console.log(API);
    const { data } = useFetch(API);
    const { promiseInProgress } = usePromiseTracker();
    const [ShowDetails, setShowDetails] = useState(false);
    const [isNominated, setIsNominated] = useState(false);

    if (data !== null) {
        const img = document.querySelector('.poster');
        if (img !== null) {
            if (img.getAttribute('src') === 'N/A') {
                img.setAttribute('src', NA);
            }
        }
    }

    useEffect(() => {
        let found = false;
        for (let i = 0; i < nomData.length; i++) {
            if (nomData[i].imdbID === id) {
                found = true;
                break;
            }
        }
        if (found) {
            setIsNominated(true);
        } else {
            setIsNominated(false);
        }
    }, [id, nomData, data]);

    useEffect(() => {
        const content = document.querySelector('.title-modal');
        if (data !== null) {
            var genre = data.Genre; // this has global scope
        }
        const genreTags = [
            'Action',
            'Adventure',
            'Animation',
            'Biography',
            'Comedy',
            'Crime',
            'Documentary',
            'Drama',
            'Family',
            'Fantasy',
            'Horror',
            'Music',
            'Mystery',
            'Romance',
            'Sci-Fi',
            'Short',
            'Sport',
            'Thriller',
            'War'
        ]
        // console.log(genre);
        if (genre !== undefined && content !== null) {
            genreTags.forEach(tag => {
                if (genre.includes(tag)) {
                    // console.log(`<p>${tag}</p>`);
                    content.insertAdjacentHTML('afterend', `<p class="genre">${tag}</p>`);
                }
            });
        }
    }, [data]);

    const handleClick = e => {
        if (e.target === document.querySelector('div.backdrop') || e.target === document.querySelector('img.exit')) {
            setShowModal(false);
            setId('');
            setShowDetails(false);
        }
    };

    document.addEventListener('keydown', (e) => {
        if (showModal && e.key === 'Escape') {
            setShowModal(false);
            setId('');
            setShowDetails(false);
        }
    });

    const Nom = () => {
        if (nomData.length === 5) {
            alert('Your nominations are full!');
        } else {
            nomData.push(data);
            localStorage.setItem('nominations', JSON.stringify(nomData));
            setIsNominated(true);
        } 
    }

    const RemoveNom = () => {
        for (let i = 0; i < nomData.length; i++) {
            if (nomData[i].imdbID === id) {
                var index = i;
                break;
            }
        }
        nomData.splice(index, 1);
        localStorage.setItem('nominations', JSON.stringify(nomData));
        setIsNominated(false);
    }
 
    return (
        <AnimatePresence exitBeforeEnter>
            { showModal && (
                <motion.div className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    onClick={(e) => handleClick(e)}
                >
                    <Loading />
                    {!promiseInProgress && data && <motion.div className="modal">
                        <img className="poster" src={data.Poster} alt="Movie Poster" />
                        <div className="data">
                            <img className="exit" src={exitIcon} alt="Exit Icon" onClick={(e) => handleClick(e)} />
                            <div className="info">
                                <h3 className="title-modal">{data.Title}</h3>
                                <p className="actors"><b>Actors: </b>{data.Actors}</p>
                                <p className="plot"><b>Plot Summary: </b>{data.Plot}</p>
                                {!ShowDetails && (
                                    <div className="less-details" onClick={() => setShowDetails(true)}>
                                        <img className="closed" src={closedIcon} alt="Closed Icon" />
                                        <h4>More Details</h4>
                                    </div>
                                )}
                                {ShowDetails && (
                                    <div>
                                        <div className="more-details" onClick={() => setShowDetails(false)}>
                                            <img className="open" src={openIcon} alt="Open Icon" />
                                            <h4>Less Details</h4>

                                        </div>
                                        <div className="more-details-info" >
                                            <p><b>Rated:</b> {data.Rated}</p>
                                            <p><b>Released:</b> {data.Released}</p>
                                            <p><b>Runtime:</b> {data.Runtime}</p>
                                            <p><b>Produced by:</b> {data.Production}</p>
                                            <p><b>Director(s):</b> {data.Director}</p>
                                            <p><b>Writer(s):</b> {data.Writer}</p>
                                            <p><b>Language:</b> {data.Language}</p>
                                            <p><b>Country:</b> {data.Country}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {!isNominated && <button onClick={() => Nom()}>NOMINATE</button>}
                            {isNominated && <button className="nominated" onClick={() => RemoveNom()}>NOMINATED</button>}
                        </div>
                    </motion.div>}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Modal;