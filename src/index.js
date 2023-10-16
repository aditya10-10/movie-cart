import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { createStore, getDefaultMiddleware } from '@reduxjs/store';
import "./index.css";
import App from "./components/App";
// import moviesReducer from './reducers';
import  rootReducer  from "./reducers";

const logger  = function ({dispatch, getState}) {
  return function (next){
    return function (action){
      console.log("action", action.type);
      next(action);
    }
  }
}  

const store = configureStore({
  reducer: {
    movies: rootReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

console.log('store', store);
// console.log('store', store.getState());

// store.dispatch({
//   type:"ADD_MOVIES",
//   movies: [{name: "Aditya"}]
// })
 
// console.log("after state", store.getState());

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>
  </Provider>
);
