import { useState, useContext, createContext } from 'react';

type SearchContextType = {
  search: string;
  setSearch: (search: string) => void;
};

interface SearchContextProps {
  children: React.ReactNode;
}

const SearchContext = createContext<SearchContextType | null>({
  search: '',
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

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, useSearchContext };
