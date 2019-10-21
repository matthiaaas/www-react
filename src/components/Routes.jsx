import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "../pages/landing/LandingPage";
import ProjectPage from "../pages/project/ProjectPage";
import PageNotFound from "../pages/error/PageNotFound";

import projectsData from "../data/projects.js";
import settingsData from "../data/settings.js";

class Routes extends Component {
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

export default Routes;
