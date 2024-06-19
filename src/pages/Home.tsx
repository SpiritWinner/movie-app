import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import Filter from '../components/Filter';

const Home: React.FC = () => {
  const [filterParams, setFilterParams] = useState({ genre: '', rating: 0 , year: 1990 });

  const handleFilter = (genre: string, rating: number, year: number) => {
    setFilterParams({ genre, rating, year });
  };

  return (
    <div>
      <Filter onFilter={handleFilter} />
      <MovieList filterParams={filterParams} />
    </div>
  );
};

export default Home;
