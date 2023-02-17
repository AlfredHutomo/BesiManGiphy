import SearchBar from '../components/SearchBar';
import GifList from '../components/GifList';

const SearchPage = () => {
  return (
    <>
      <h2>SEARCH YOUR GIPHY</h2>
      <SearchBar defaultSearch='cat' />
      <GifList />
    </>
  );
};

export default SearchPage;
