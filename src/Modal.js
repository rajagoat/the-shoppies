// import { useEffect } from "react";
import NA from './img/NA.svg';
import { motion, AnimatePresence } from 'framer-motion';
import useFetch from './useFetch';
import exitIcon from './img/exit-icon.svg';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
};

const Modal = ({ showModal, setShowModal, id }) => {
    const API = `http://www.omdbapi.com/?i=${id}&apikey=da1f5ac0&plot=full`;
    // console.log(API);
    const { data, isPending } = useFetch(API);
    /* if (data != null) {
        console.log(data);
    } */

    if (data != null) {
        const img = document.querySelector('.poster');
        if (img.getAttribute('src') === 'N/A') {
            img.setAttribute('src', NA);
        }
    }

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
                            <img src={exitIcon} alt="Exit Icon" onClick={() => setShowModal(false)} />
                            <div className="info">
                                <h3>{data.Title}</h3>
                                {/* <p>{getGenre(data.Genre)}</p> */}
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