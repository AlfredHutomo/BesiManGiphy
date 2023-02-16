import { Gif } from '@giphy/react-components';
import { useEffect, useState } from 'react';

interface GifItemProps {
  gif: Gif;
}

const GifItem = ({ gif }: GifItemProps) => {
  const [imageWidth, setImageWidth] = useState(window.innerWidth / 3.2);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setImageWidth(width / 3.2);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='gif-wrapper'>
      <Gif gif={gif as any} width={imageWidth} />
    </div>
  );
};

export default GifItem;
