function Search({ setSearchTerm }) {
  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <form className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={handleSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
