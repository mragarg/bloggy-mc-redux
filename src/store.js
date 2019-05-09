import {
    combineReducers,
    createStore
} from 'redux';

import posts from './reducers/posts';

const FREQUENCY = 2000;
const LS_KEY = 'bloddy-mc-redux';


// Pass an object to combineReducers.
// This object should be 'shaped' like your state.
const rootReducer = combineReducers({
    posts
});

// check localStorage for any previously saved app state
// if it's there, pass as second argument to createStore
const initialState = JSON.parse(localStorage.getItem(LS_KEY)) || {};

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

let saveInterval = setInterval(() => {
    const state = store.getState();
    localStorage.setItem(LS_KEY, JSON.stringify(state));
}, FREQUENCY);

export default store;