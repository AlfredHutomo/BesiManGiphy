import SearchBar from '../components/SearchBar';
import GifList from '../components/GifList';

const IronManPage = () => {
  return (
    <>
      <SearchBar defaultSearch='iron man' lockSearch={true} />
      <GifList />
    </>
  );
};

export default IronManPage;
