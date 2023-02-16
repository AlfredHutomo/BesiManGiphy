import { debounce } from 'lodash';
import { useState, useContext, createContext, useCallback } from 'react';

type SearchContextType = {
  search: string;
  debouncedSearch: string;
  setSearch: (search: string) => void;
};

interface SearchContextProps {
  children: React.ReactNode;
}

const SearchContext = createContext<SearchContextType | null>({
  search: '',
  debouncedSearch: '',
  setSearch: () => {},
});

const useSearchContext = () => {
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error(
      'useSearchContext must be used within a SearchContext.Provider'
    );
  }

  return searchContext;
};

const SearchProvider = ({ children }: SearchContextProps) => {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const debouncedSetSearch = useCallback(
    debounce((searchVal: string) => {
      setDebouncedSearch(searchVal);
    }, 500),
    []
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    debouncedSetSearch(value);
  };

  return (
    <SearchContext.Provider
      value={{ search, setSearch: handleSearch, debouncedSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, useSearchContext };
