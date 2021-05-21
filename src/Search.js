import { useEffect } from 'react';

const Search = ({ setMovie, page, setPage }) => {

    useEffect(() => {
        const value = document.querySelector('div > form input');
        value.setAttribute('size', value.getAttribute('placeholder').length);
    }, []);

    useEffect(() => {
        const pages = document.querySelectorAll('.page-number');
        // console.log(pages);
        pages.forEach(pg => {
            if (!isNaN(pg.innerText)) {
                if (Number(pg.innerText) === page) {
                    pg.setAttribute('class', 'main-page');
                } else if (Number(pg.innerText) === page - 1 || Number(pg.innerText) === page + 1) {
                    pg.setAttribute('class', 'secondary-page');
                }
                else if (Number(pg.innerText) === page - 2 || Number(pg.innerText) === page + 2) {
                    pg.setAttribute('class', 'tertiary-page');
                }
            }
        })
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setMovie(e.target[0].value);
        // console.log(e.target[0].value);
        const mainPage = document.querySelector('.main-page');
        if (mainPage !== null) {
            mainPage.setAttribute('class', 'page-number');
        }
        const secPages = document.querySelectorAll('.secondary-page');
        if (secPages !== null) {
            secPages.forEach(secPage => {
                secPage.setAttribute('class', 'page-number');
            })
        }
        const terPages = document.querySelectorAll('.tertiary-page');
        if (terPages !== null) {
            terPages.forEach(terPage => {
                terPage.setAttribute('class', 'page-number');
            })
        }
        setPage(1);
    }

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder={`Search for any movie (ex: Star Wars)`}
                        required
                    />
                <button>Search</button>
            </form>
        </div>
    );
}

export default Search;