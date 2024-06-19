import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

interface FilterProps {
  onFilter: (genre: string, rating: number, year: number) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState(0);
  const [year, setYear] = useState(1990);

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setRating(value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setYear(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(genre, rating, year);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto', padding: 2, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h6" component="div" gutterBottom>
        Filter Movies
      </Typography>
      <TextField
        label="Genre"
        variant="outlined"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <TextField
        label="Rating"
        type="number"
        variant="outlined"
        value={rating}
        onChange={handleRatingChange}
      />
      <TextField
        label="Year"
        type="number"
        variant="outlined"
        value={year}
        onChange={handleYearChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Filter
      </Button>
    </Box>
  );
};

export default Filter;
