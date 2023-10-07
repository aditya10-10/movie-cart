import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import "./index.css";
import App from "./components/App";
import moviesReducer from './reducers';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

console.log('store', store);
console.log('store', store.getState());

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
