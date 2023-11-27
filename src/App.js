// src/App.js
import React from 'react';
import MovieList from './Components/MovieList';
import MovieSearch from './Components/MovieSearch';

function App() {
  return (
    <>
      <MovieSearch />
      <MovieList />
    </>
  );
}

export default App;
