import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import initialState from './initialState';

// Используем редюсер-болванку
const reducer = (state = initialState, action) => state;

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware([]),
 
));

export default store;