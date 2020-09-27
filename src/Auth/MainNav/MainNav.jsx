import React from "react";
import PropTypes from "prop-types";

import { Nav } from "grommet";

import MainNavAnchor from "./Anchor";
import entries from "./entries";

const MainNav = ({ rootPath, ...restProps }) => {
  const navProps = {
    direction: "row",
    gap: "none",
    background: "brand",
    align: "stretch",
    ...restProps
  };

  const fixedAnchorProps = {
    pad: "medium"
  };

  return (
    <Nav {...navProps}>
      {entries.map((entry) => {
        const path = `${rootPath}${entry.href}`;
        return (
          <MainNavAnchor {...fixedAnchorProps} key={path} to={path} flex>
            {entry.label}
          </MainNavAnchor>
        );
      })}
    </Nav>
  );
};

MainNav.propTypes = {
  rootPath: PropTypes.string
};

MainNav.defaultProps = {
  rootPath: "/"
};

export default MainNav;
