//import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { logger } from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
//import { composeWithDevTools } from "redux-devtools-extension";
//import initialState from './initialState';
import contactReducer from './contact/contact-reducer';


// // Используем редюсер-болванку
// const reducer = (state = initialState, action) => state;

// const store = createStore(
//   rootReducer,
//   composeWithDevTools()
// );

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const contactsPersistConfig = {
  key: "todos",
  storage,
  blacklist: ["filter"],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);