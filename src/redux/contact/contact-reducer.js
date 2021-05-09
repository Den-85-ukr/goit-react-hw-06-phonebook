import { combineReducers } from 'redux';
import actionTypes from "./contact-types";

const items = (state = [], { type, payload }) => {
    switch (type) {
      case actionTypes.ADD:
            return [...state, payload];
        
      case actionTypes.DEL:
            return state.filter(({ id }) => id !== payload);
        
      default:
        return state;
    }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});