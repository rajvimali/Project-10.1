// src/components/MovieSearch.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from './movieActions';

const MovieSearch = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        dispatch(fetchMovies(searchQuery));
    };

    return (
        <div>
            <h2>Search Movies</h2>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default MovieSearch;
