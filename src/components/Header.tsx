import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../common/colors";
import { Box } from "../utils";

const Header = () => {
  return (
    <Head as="header">
      <Ul>
        <Li>
          <Link to="/">Movies</Link>
        </Li>
        <Li>
          <Link to="/peoples">Peoples</Link>
        </Li>
        <Li>
          <Link to="/planets">Planets</Link>
        </Li>
      </Ul>
    </Head>
  );
};

const Head = styled(Box)`
  margin: 0;
  border-bottom: 0.5px solid #cbd5e1;
`;

const Ul = styled("ul")`
  list-style-type: none;
  display: flex;
  margin: 20px 0;
`;

const Li = styled("li")`
  margin: 0 15px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  &.active,
  &:hover {
    color: ${colors.greenDark};
  }
`;

export default Header;
