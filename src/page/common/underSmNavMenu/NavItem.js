import React from 'react';
import { NavLink as navlink } from 'react-router-dom';
import { ClassNames } from '@emotion/react';
import styled from '@emotion/styled';
import s from 'S';

const Li = styled.li`
  width: 20%;
  flex: 1 0 auto;

  &:hover {
    & path {
      fill: ${s.pallete.primary};
    }
    & span {
      color: ${s.pallete.black};
    }
  }
`;

const NavLink = styled(navlink)`
  display: block;
  text-decoration: none;
  text-align: center;
  color: ${s.pallete.grey5}
`;

// https://stackoverflow.com/questions/57117445/how-to-create-a-css-class-for-use-in-activeclassname
const NavItem = ({ children, to, exact, otherProps }) => {
  return (
    <Li>
      <ClassNames>
        {({ css }) => (
          <NavLink
            to={to}
            exact={exact}
            activeClassName={css`
              & path {
                fill: ${s.pallete.primary};
              }
              & span {
                color: ${s.pallete.black};
              }
            `}
            {...otherProps}
          >
            {children}
          </NavLink>
        )}
      </ClassNames>
    </Li>
  );
};

export default NavItem;
