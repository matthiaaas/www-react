import React, { Component, Fragment } from "react";

import "../../assets/css/pages/landingpage.scss";

import SEO from "../../components/SEO";
import Navbar from "../../components/areas/Navbar";
import Footer from "../../components/areas/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "../../components/areas/Contact";

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <main id="home">
          <SEO />
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default LandingPage;
