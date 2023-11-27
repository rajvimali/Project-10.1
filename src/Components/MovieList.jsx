// src/components/MovieList.js
import React from 'react';
import { useSelector } from 'react-redux';

const MovieList = () => {
    const movies = useSelector((state) => state.movies);

    return (
        <div>
            <h2>Movies</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
