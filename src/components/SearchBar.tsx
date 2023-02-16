import { useSearchContext } from '../searchContext';

const SearchBar = () => {
  const { search, setSearch } = useSearchContext();

  return (
    <input
      className='search-bar'
      type='text'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
