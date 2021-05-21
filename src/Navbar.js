import movieIcon from './img/movie-icon.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo icon">
                <img src={movieIcon} alt="Movie Icon" />
            </Link>
            <Link to="/" className="logo">
                <h1>THE SHOPPIES</h1>
            </Link>
            <Link to="/" className="links home">Home</Link>
            <Link to="/nominations" className="links nom">Nominations</Link>
        </nav>
    );
}

export default Navbar;