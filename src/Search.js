const Search = () => {
    const [movie, setMovie] = useState('Star Wars');

    return (
        <div className="create">
            <form>
                <input
                    type="text"
                    placeholder={`Search for any movie (ex: ${movie}`}
                />
                <button>Search</button>
            </form>
        </div>
    );
}

export default Search;