import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Box } from "../utils";

const Header = () => {
  return (
    <Box as="header">
      <Ul>
        <Li>
          <Link to="/">Movies</Link>
        </Li>
        <Li>
          <Link to="/peoples">Peoples</Link>
        </Li>
      </Ul>
    </Box>
  );
};

const Ul = styled("ul")`
  list-style-type: none;
  display: flex;
`;

const Li = styled("li")`
  margin: 0 15px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: green;
  }

  &:hover {
    color: greenyellow;
  }
`;

export default Header;
