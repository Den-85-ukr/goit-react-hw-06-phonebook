import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";
import actions from './contact-actions';
//import actionTypes from "./contact-types";

// const items = (state = [], { type, payload }) => {
//     switch (type) {
//       case actionTypes.ADD:
//             return [...state, payload];
        
//       case actionTypes.DEL:
//             return state.filter(({ id }) => id !== payload);
        
//       default:
//         return state;
//     }
// };

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

const filter = createReducer("", {
  [actions.filter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});