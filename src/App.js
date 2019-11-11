import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AOS from "aos";

import LandingPage from "./pages/landing/LandingPage";
import ProjectPage from "./pages/project/ProjectPage";
import ImprintPage from "./pages/legal/ImprintPage";
import PrivacyPage from "./pages/legal/PrivacyPage";
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
          <Route exact path="/imprint" component={ImprintPage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
