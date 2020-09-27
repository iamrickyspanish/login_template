import React from "react";
import PropTypes from "prop-types";

import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";

import LoginForm from "./Login/Form";
import RegistrationForm from "./Registration/Form";
import MainNav from "./MainNav";

import { Box } from "grommet";

const AuthApp = ({ rootPath }) => {
  const { url } = useRouteMatch();
  return (
    <Box direction="column" fill>
      <MainNav rootPath={rootPath} />
      <Box fill background="background" pad="medium">
        <Switch>
          <Route exact path={`${url}/login`} component={LoginForm} />
          <Route
            exact
            path={`${url}/registration`}
            render={() => <RegistrationForm rootPath={rootPath} />}
          />
          <Route exact path={`${url}/help`} render={() => null} />
          <Redirect to={`${url}/login`} />
        </Switch>
      </Box>
    </Box>
  );
};

AuthApp.propTypes = {
  rootPath: PropTypes.string
};

AuthApp.defaultProps = {
  rootPath: ""
};

export default AuthApp;
