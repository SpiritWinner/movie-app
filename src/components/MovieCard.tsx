import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Movie } from '../types';

interface MovieCardProps {
    movie: Movie;
}

const StyledCard = styled(Card)({
    maxWidth: 345,
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '700px'
});

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const movieName = movie.name || movie.alternativeName || 'Unknown';

    return (
        <StyledCard>
            <Box sx={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: movie.poster && movie.poster.url ? 'transparent' : 'grey.300' }}>
                {movie.poster && movie.poster.url ? (
                    <CardMedia
                        component="img"
                        alt={movieName}
                        height="500"
                        image={movie.poster.url}
                        title={movieName}
                    />
                ) : (
                    <Typography variant="h6" color="text.secondary">
                        No Image Available
                    </Typography>
                )}
            </Box>
            <CardContent>
                <Typography variant="h5" component="div">
                    {movieName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {movie.year}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    IMDb Rating: {movie.rating.imdb}
                </Typography>
            </CardContent>
            <Box sx={{ padding: 2 }}>
                <Button component={Link} to={`/movie/${movie.id}`} variant="contained" color="primary">
                    Подробнее
                </Button>
            </Box>
        </StyledCard>
    );
};

export default MovieCard;
