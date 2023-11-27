import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import movieReducer from './movieReducer';

const Store = createStore(movieReducer, applyMiddleware(thunk));

export default Store;
