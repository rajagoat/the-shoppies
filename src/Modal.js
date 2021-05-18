// import { useEffect } from "react";
import NA from './img/NA.svg';
import { motion, AnimatePresence } from 'framer-motion';
import useFetch from './useFetch';
import exitIcon from './img/exit-icon.svg';
import { useEffect } from 'react';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
};

const Modal = ({ showModal, setShowModal, id, setId }) => {
    const API = `http://www.omdbapi.com/?i=${id}&apikey=da1f5ac0&plot=short`;
    // console.log(API);
    const { data, isPending } = useFetch(API);
    /* if (data != null) {
        console.log(data);
    } */

    if (data != null) {
        const img = document.querySelector('.poster');
        if (img !== null) {
            if (img.getAttribute('src') === 'N/A') {
                img.setAttribute('src', NA);
            }
        }
    }

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
                    content.insertAdjacentHTML('afterend', `<p>${tag}</p>`);
                }
            });
        }
    }, [data]);

    return (
        <AnimatePresence exitBeforeEnter>
            { showModal && (
                <motion.div className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                >
                    {isPending && <div>Loading...</div>}
                    {data && <motion.div className="modal">
                        <img className="poster" src={data.Poster} alt="Movie Poster" />
                        <div className="data">
                            <img src={exitIcon} alt="Exit Icon" onClick={() => {
                                setShowModal(false)
                                setId('');
                            }} />
                            <div className="info">
                                <h3 className="title-modal">{data.Title}</h3>
                                <p><b>Actors: </b>{data.Actors}</p>
                                <p className="plot"><b>Plot: </b>{data.Plot}</p>
                            </div>
                            <button>NOMINATE</button>
                        </div>
                    </motion.div>}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Modal;