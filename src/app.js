import React from "react";
import Books from "./books";
import ScrollToTop from "./scrolltotop";
import "./sass/style.css"

const App = () => {
  return (
    <div>
      <Books></Books>
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default App;
