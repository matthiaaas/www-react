import React, { Component, Fragment } from "react";

import "../../assets/css/pages/projectpage.scss";

import SEO from "../../components/SEO";
import Navbar from "../../components/areas/Navbar";
import Footer from "../../components/areas/Footer";

import Header from "./sections/Header";
import Preview from "./sections/Preview";
import Overview from "./sections/Overview";
import Next from "./sections/Next";
import Contact from "../../components/areas/Contact";

import projectsData from "../../data/projects.js";

class ProjectPage extends Component {
  componentDidMount() {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 2);
  }

  componentWillMount() {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 2);
  }

  render() {
    const currProject = projectsData[this.props.match.params.slug];
    const nextProject = projectsData[Object.keys(projectsData)[(Object.keys(projectsData).indexOf(currProject.name) + 1) % Object.keys(projectsData).length]];

    return (
      <Fragment>
        <Navbar />
        <main id="project">
          <SEO title={"Matthias — "+currProject.title} description={currProject.intro} />
          <Header content={currProject.intro} />
          <Preview src={currProject.image.preview.src} />
          <Overview client={currProject.client} demo={currProject.demo} skills={currProject.skills} />
          { currProject.content }
          <Next project={nextProject} />
          <Contact />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default ProjectPage;
