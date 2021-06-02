import { Route, Switch } from "react-router-dom";
import React from "react";

import Home from "../components/Home";
import Graduation from "../components/Graduation";
import Wedding from "../components/Wedding";
import Confraternization from "../components/Confraternization";
import NotFound from "../components/NotFound";

function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/Graduation">
        <Graduation />
      </Route>

      <Route path="/Wedding">
        <Wedding />
      </Route>

      <Route path="/Confraternization">
        <Confraternization />
      </Route>

      <Route path="/NotFound">
        <NotFound />
      </Route>
    </Switch>
  );
}
export default Router;
