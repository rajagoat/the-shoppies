import { motion, AnimatePresence } from 'framer-motion';
import useFetch from './useFetch';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
};

const Modal = ({ showModal, id }) => {
    const API = `http://www.omdbapi.com/?i=${id}&apikey=da1f5ac0`;
    // console.log(API);
    /* const { data, isPending } = useFetch(API);
    if (data != null) {
        console.log(data);
    } */

    return (
        <AnimatePresence exitBeforeEnter>
            { showModal && (
                <motion.div className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="modal">
                        
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Modal;