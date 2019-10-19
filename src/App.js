import React, { Component, Fragment } from "react";

import "./assets/css/style.scss";

import Routes from "./components/Routes";
import Navbar from "./components/areas/Navbar";
import Footer from "./components/areas/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <Routes></Routes>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default App;
