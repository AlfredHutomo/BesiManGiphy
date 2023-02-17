import SearchBar from '../components/SearchBar';
import GifList from '../components/GifList';

const IronManPage = () => {
  return (
    <>
      <h2>IRON MAN GIPHY</h2>
      <SearchBar defaultSearch='iron man' lockSearch={true} />
      <GifList />
    </>
  );
};

export default IronManPage;
