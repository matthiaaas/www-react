import React, { Component, Fragment } from "react";

import "../../assets/css/pages/projectpage.scss";

import SEO from "../../components/SEO";
import Navbar from "../../components/areas/Navbar";
import Footer from "../../components/areas/Footer";

import Header from "./sections/Header";
import Preview from "./sections/Preview";
import Overview from "./sections/Overview";
import Contact from "../../components/areas/Contact";

import projectsData from "../../data/projects.js";

class ProjectPage extends Component {
  componentDidMount() {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 2);
  }

  render() {
    const currProject = projectsData[this.props.match.params.slug];

    return (
      <Fragment>
        <Navbar />
        <main id="project">
          <SEO title={"Matthias — "+currProject.title} description={currProject.intro} />
          <Header content={currProject.intro} />
          <Preview src={currProject.image.preview.src} />
          <Overview client={currProject.client} skills={currProject.skills} />
          { currProject.content }
          <Contact />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default ProjectPage;
