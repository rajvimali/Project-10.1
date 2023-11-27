// src/store/actions/movieActions.js
import axios from 'axios';

export const setMovies = (movies) => ({
    type: 'SET_MOVIES',
    payload: movies,
});

export const fetchMovies = (searchQuery) => {
    return (dispatch) => {
        axios
            .get(`https://api.themoviedb.org/3/search/movie`, {
                params: {
                    api_key: 'YOUR_API_KEY',
                    query: searchQuery,
                },
            })
            .then((response) => {
                dispatch(setMovies(response.data.results));
            })
            .catch((error) => {
                console.error('Error fetching movies:', error);
            });
    };
};
