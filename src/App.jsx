import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

const Hot = hot(App);
ReactDOM.render(<Hot />, document.querySelector("#root"));
