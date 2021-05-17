import movieIcon from './img/movie-icon.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={movieIcon} alt="Movie Icon" />
            <h1>THE SHOPPIES</h1>
            <p className="links home">Home</p>
            <p className="links nom">Nominations</p>
        </nav>
    );
}

export default Navbar;