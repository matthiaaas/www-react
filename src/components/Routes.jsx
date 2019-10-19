import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "../pages/landing/LandingPage";
import NoeltnerProject from "../pages/projects/Noeltner";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage}></Route>
    <Route exact path="/project/noeltner" component={NoeltnerProject}></Route>
  </Switch>
)

export default Routes;
