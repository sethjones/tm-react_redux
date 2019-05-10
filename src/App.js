import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import PostsForm from "./components/PostsForm";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import store from './store';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostsForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
