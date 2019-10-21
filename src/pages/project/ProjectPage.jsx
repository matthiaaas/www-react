import React, { Component } from "react";

import "../../assets/css/pages/projectpage.scss";

import SEO from "../../components/SEO";
import Header from "./sections/Header";
import Preview from "./sections/Preview";
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
      <main id="project">
        <SEO title={"Matthias — "+currProject.title} description={currProject.intro}></SEO>
        <Header content={currProject.intro}></Header>
        <Preview src={currProject.image.preview.src}></Preview>
        { currProject.content }
        <Contact></Contact>
      </main>
    );
  }
}

export default ProjectPage;
