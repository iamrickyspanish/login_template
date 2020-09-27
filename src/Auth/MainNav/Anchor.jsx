import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Anchor, Box } from "grommet";

const NavLinkBox = (props) => (
  <Box {...props} focusIndicator={false} as={NavLink} />
);

const NavAnchor = styled(({ navigate, to, ...restProps }) => {
  const [active, setActive] = useState(false);
  const ref = useRef();
  const node = ref?.current;

  useEffect(() => {
    setActive(node?.className?.includes("active"));
  }, [node?.className]);

  const newProps = {
    ...restProps,
    to,
    pad: "medium",
    justify: "center",
    color: active ? "brand" : "background",
    as: NavLinkBox,
    background: active ? "background" : "brand",
    innerRef: ref
  };

  return <Anchor {...newProps} />;
})`
  text-align: center;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    outline: none;
  }
`;

NavAnchor.propTypes = {
  active: PropTypes.bool
};

export default NavAnchor;
