import React, { Component} from "react";

import "../../assets/css/pages/landingpage.scss";

import SEO from "../../components/SEO";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "../../components/areas/Contact";

class LandingPage extends Component {
  render() {
    return (
      <main id="home">
        <SEO></SEO>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    );
  }
}

export default LandingPage;
