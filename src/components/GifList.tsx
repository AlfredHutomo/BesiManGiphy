import { useQuery } from '@tanstack/react-query';

import { useSearchContext } from '../searchContext';
import GifItem from './GifItem';
import { fetchSearch } from '../config/api';

const GifList = () => {
  const { search } = useSearchContext();

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['search', search],
    queryFn: () => fetchSearch(search),
  });

  if (isFetching || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='gif-container'>
      {data?.map((gif) => (
        <GifItem key={gif.id} gif={gif} />
      ))}
    </div>
  );
};

export default GifList;
