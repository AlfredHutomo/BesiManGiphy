import { Link } from 'react-router-dom';
import GiphyLogo from '/giphy-logo.svg';

const IntroPage = () => {
  return (
    <div className='intro-container'>
      <h2>WELCOME TO YOUR GIPHY</h2>
      <img src={GiphyLogo} alt='' style={{ maxWidth: '300px' }} />
      <Link to='/iron-man'>Iron Man Giphy</Link>
      <Link to='/search'>Search Your Giphy</Link>
    </div>
  );
};

export default IntroPage;
