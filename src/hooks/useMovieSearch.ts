import { useState, useEffect } from 'react';
import type { Movie, MovieSearchResponse } from '../types/movie';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const useMovieSearch = (query: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
          )}`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data: MovieSearchResponse = await res.json();
        setMovies(data.results);
      } catch (error) {
        setError((error as Error).message || 'Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  return { movies, loading, error };
};
