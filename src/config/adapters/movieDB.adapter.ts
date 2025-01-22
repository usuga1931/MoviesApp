import { THE_MOVIE_DB_KEY } from '@env';
import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    // api_key: 'f87d9aad518e09247eda5a2becc759ae',
    api_key: THE_MOVIE_DB_KEY ?? 'no-key',
    language: 'es',
  },
});
