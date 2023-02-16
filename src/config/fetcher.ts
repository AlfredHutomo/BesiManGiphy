import { GiphyFetch } from '@giphy/js-fetch-api';

const fetcher = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);

export default fetcher;
