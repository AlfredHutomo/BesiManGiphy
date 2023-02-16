import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import { SearchProvider } from './searchContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <div className='container'>
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
