import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "../pages/landing/LandingPage";
import ProjectPage from "../pages/project/ProjectPage";
import NoeltnerProject from "../pages/projects/Noeltner";

import projectsData from "../data/projects.js";

const Routes = () => (
  <BrowserRouter basename="/sites/private-react/">
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path={`/project/:slug(${Object.keys(projectsData).join("|")})`} component={ProjectPage} />
    </Switch>
  </BrowserRouter>
)

export default Routes;
