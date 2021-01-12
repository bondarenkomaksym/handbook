import React from "react";
import { Provider } from "react-redux";
import ArticlesList from "./components/ArticlesList";
import Charter from "./components/Charter";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Charter />
      <ArticlesList />
    </Provider>)

}

export default App;