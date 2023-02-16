import { Link } from 'react-router-dom';

const IntroPage = () => {
  return (
    <>
      <h2>Select your Giphy Mode</h2>
      <Link to='/iron-man'>Iron Man Giphy</Link>
      <Link to='/search'>Search Giphy</Link>
    </>
  );
};

export default IntroPage;
