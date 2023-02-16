import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import { SearchProvider } from './context/searchContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <div className='center-container'>
        <QueryClientProvider client={queryClient}>
          <SearchProvider>
            <SearchBar />
            <GifList />
          </SearchProvider>
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
