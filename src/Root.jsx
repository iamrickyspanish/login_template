import React, { useState } from "react";

import { Grommet } from "grommet";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import theme from "theme";

import AuthApp from "Auth/App";

export default () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Grommet theme={theme} full>
      <Router>
        <Switch>
          <Route
            strict
            path="/auth"
            render={() => <AuthApp rootPath="/auth" />}
          />
          {authenticated ? (
            <Route path="/" component={() => null} />
          ) : (
            <Redirect to="/auth" />
          )}
        </Switch>
      </Router>
    </Grommet>
  );
};
