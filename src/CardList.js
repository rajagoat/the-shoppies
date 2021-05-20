import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import NA from './img/NA.svg';
import Pages from "./Pages";

const CardList = ({ movie, setShowModal, setId }) => {
    const [page, setPage] = useState('1');
    const API = `http://www.omdbapi.com/?s=${movie}&apikey=da1f5ac0&type=movie&page=${page}`;
    // console.log(API);
    const { data } = useFetch(API);
    let idArray = [];
    if (data != null) {
        var maxPages = Math.ceil(data.totalResults / 10); // this has global scope
        // console.log(maxPages);
    }

    useEffect(() => {
        if (data != null) {
            const img = document.querySelectorAll('.poster');
            img.forEach((image) => {
                if (image.getAttribute('src') === 'N/A') {
                    image.setAttribute('src', NA);
                }
            })
        }
    }, [data]);

    const handleClick = (id) => {
        setShowModal(true);
        // console.log(id);
        setId(id);
    }

    return (
        <div>
            <ul className="card-list">
                {data && data.Response === 'False' && <h1 className="no-results">No Results Found</h1>}
                {data && data.Response !== 'False' && data.Search.map((movie) => {
                    // console.log(idArray);
                    if (!idArray.includes(movie.imdbID)) {
                        idArray.push(movie.imdbID);
                        return (
                            <li className="card" key={`${movie.imdbID}`} onClick={() => handleClick(movie.imdbID)}>
                                <img className="poster" src={`${movie.Poster}`} alt="Movie Poster" />
                                <div className="container">
                                    <h3 className="title">{movie.Title}</h3>
                                    <p className="year">{movie.Year}</p>
                                </div>
                            </li>
                        )
                    } else {
                        return null;
                    }
                })}
            </ul>
            <Pages maxPages={maxPages} page={Number(page)} setPage={setPage} />
        </div>
    );
}

export default CardList;