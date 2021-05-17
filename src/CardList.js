import { useEffect } from "react";
import useFetch from "./useFetch";
import NA from './img/NA.svg';

const CardList = ({ movie }) => {
    const API = `http://www.omdbapi.com/?s=${movie}&apikey=da1f5ac0&type=movie`;
    // console.log(API);
    const { data, isPending } = useFetch(API);
    /* if (data != null) {
        data.Search.forEach(element => {
            console.log(element);
        });
    } */

    useEffect(() => {
        if (data != null) {
            const img = document.querySelectorAll('.poster');
            img.forEach((image) => {
                if (image.getAttribute('src') === 'N/A') {
                    image.setAttribute('src', NA);
                }
            })
        }
    }, [data])

    return (
        <ul className="card-list">
            {isPending && <div>Loading...</div>}
            {data && data.Search.map((movie) => (
                <li className="card" key={`${movie.imdbID}`}>
                    <img className="poster" src={`${movie.Poster}`} alt="Movie Poster" />
                    <div className="container">
                        <h3 className="title">{movie.Title}</h3>
                        <p className="year">{movie.Year}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default CardList;