import fetcher from './fetcher';

export const fetchSearch = async (query: string) => {
  let endpoint = '/gifs/trending';

  if (query) {
    endpoint = '/gifs/search';
  }

  let result;

  if (query) {
    result = await fetcher.search(query, { limit: 9 });
  } else {
    result = await fetcher.trending({ limit: 9 });
  }

  const data = (result?.data || []) as Gif[];

  return data;
};
