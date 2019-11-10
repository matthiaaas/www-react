import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AOS from "aos";

import LandingPage from "./pages/landing/LandingPage";
import ProjectPage from "./pages/project/ProjectPage";
import PageNotFound from "./pages/error/PageNotFound";

import projectsData from "./data/projects.js";
import settingsData from "./data/settings.js";

import "./assets/css/style.scss";

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 800
    });
  }

  render() {
    return (
      <BrowserRouter basename={settingsData.basename}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path={`/project/:slug(${Object.keys(projectsData).join("|")})`} component={ProjectPage} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
