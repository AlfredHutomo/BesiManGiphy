import { useEffect } from 'react';
import { useSearchContext } from '../context/searchContext';

interface SearchBarProps {
  defaultSearch?: string;
  lockSearch?: boolean;
}

const SearchBar = ({ defaultSearch, lockSearch }: SearchBarProps) => {
  const { search, setSearch } = useSearchContext();

  useEffect(() => {
    if (defaultSearch) {
      setSearch(defaultSearch);
    } else {
      setSearch('');
    }
  }, []);

  return (
    <input
      className='search-bar'
      type='text'
      value={search}
      disabled={lockSearch}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
