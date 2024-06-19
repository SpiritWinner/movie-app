import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetail } from '../services/api';
import { MovieDetail as MovieDetailType } from '../types';
import { Box, Typography, CircularProgress, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
  maxWidth: 800,
  marginLeft: 'auto',
  marginRight: 'auto',
}));

const StyledImage = styled('img')({
  width: '100%',
  height: 'auto',
  marginBottom: '20px',
});

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailType | null>(null);

  useEffect(() => {
    getMovieDetail(Number(id)).then(response => {
      setMovie(response.data);
    });
  }, [id]);

  if (!movie) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress />
    </Box>
  );

  const movieName = movie.name || movie.alternativeName || 'Unknown';
  const genres = movie.genres ? movie.genres.map(genre => genre.name).join(', ') : 'Unknown';

  return (
    <StyledPaper elevation={3}>
      {movie.poster && movie.poster.previewUrl && (
        <StyledImage src={movie.poster.previewUrl} alt={movieName} />
      )}
      <Typography variant="h4" component="h1" gutterBottom>
        {movieName}
      </Typography>
      <Typography variant="body1" paragraph>
        {movie.description}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Rating: {movie.rating.imdb}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Release Date: {movie.year}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Genres: {genres}
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Вернуться на главную
      </Button>
    </StyledPaper>
  );
};

export default MovieDetail;
