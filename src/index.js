import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers';
import { getPosts } from "./actions/post.action";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});


store.dispatch(getPosts());

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); 

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
