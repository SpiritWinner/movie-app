import axios from 'axios';

const API_URL = 'https://api.kinopoisk.dev/v1.4/movie';
const API_KEY = 'ZG3QFJC-FDP4JZR-KQQ8HJH-M0SV6MT';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'X-API-KEY': API_KEY,
  },
});

export const getMovies = (page: number, genre?: string, rating?: number, year?: number) => {
  let query = `${API_URL}?page=${page}&limit=50`;
  if (genre) query += `&genres.name=${encodeURIComponent(genre)}`;
  if (rating) query += `&rating.imdb=${rating}`;
  if (year) query += `&year=${year}`;

  return api.get(query);
};

export const getMovieDetail = (id: number) => {
  return api.get(`${API_URL}/${id}`);
};
