import { SearchProvider } from './context/searchContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import IntroPage from './pages/IntroPage';
import IronManPage from './pages/IronManPage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <IntroPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
  {
    path: '/iron-man',
    element: <IronManPage />,
  },
]);

function App() {
  return (
    <div className='App'>
      <div className='center-container'>
        <QueryClientProvider client={queryClient}>
          <SearchProvider>
            <RouterProvider router={router} />
          </SearchProvider>
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
