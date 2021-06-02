import { Route, Switch } from "react-router-dom";
import Home from "";
import Graduation from "";
import Wedding from "";
import Confraternization from "";
import NotFound from "";

function Router() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route>
          <Graduation />
        </Route>
      </Switch>
      <Switch>
        <Route>
          <Wedding />
        </Route>
      </Switch>
      <Switch>
        <Route>
          <Confraternization />
        </Route>
      </Switch>
      <Switch>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
export default Route;
