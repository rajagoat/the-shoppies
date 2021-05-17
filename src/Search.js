import { useEffect } from 'react';

const Search = ({setMovie}) => {

    useEffect(() => {
        const value = document.querySelector('div > form > input');
        value.setAttribute('size', value.getAttribute('placeholder').length);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMovie(e.target[0].value);
        console.log(e.target[0].value);
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