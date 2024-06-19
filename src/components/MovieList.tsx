import React, { useState, useEffect } from 'react';
import { CircularProgress, Grid, Box, Button } from '@mui/material';
import { getMovies } from '../services/api';
import MovieCard from './MovieCard';
import { Movie } from '../types';

interface MovieListProps {
  filterParams: {
    genre: string;
    rating: number;
    year: number;
  };
}

const MovieList: React.FC<MovieListProps> = ({ filterParams }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchMovies = async () => {
      try {
        const response = await getMovies(page, filterParams.genre, filterParams.rating, filterParams.year);
        setMovies(response.data.docs);
        setLoading(false);
      } catch (error) {
        console.error('Ошибка при загрузке фильмов:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page, filterParams]);

  return (
    <Box sx={{ padding: 2 }}>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Grid container spacing={2}>
            {movies.map(movie => (
              <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              sx={{ marginRight: 1 }}
            >
              Previous
            </Button>
            <Button variant="contained" color="primary" onClick={() => setPage(page + 1)}>
              Next
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default MovieList;
