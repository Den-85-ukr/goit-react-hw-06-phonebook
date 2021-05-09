import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//import initialState from './initialState';
import contactReducer from './contact/contact-reducer';


// // Используем редюсер-болванку
// const reducer = (state = initialState, action) => state;

const rootReducer = combineReducers({
  contacts: contactReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

export default store;