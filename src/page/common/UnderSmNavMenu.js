import React from 'react';
import styled from '@emotion/styled';
import { useAuthContext } from '@context/global/AuthContext';
import Icons from './underSmNavMenu/Icons';
import NavItem from './underSmNavMenu/NavItem';
import { useShowOverThresholdOrOnScrollUp } from '@hooks';
import Show from '@component/Show';
import s from 'S';

const StyledXsNavMenu = styled.div`
  ${s.zIndex.fixed}
  ${s.rowCenter}
  box-shadow: 0 0 3px  ${s.pallete.grey0};
  background-color: ${s.pallete.white};
  position: fixed;
  bottom: 0;
  width: 100%;
  transition: bottom 0.5s;
  ${({ show }) => (show ? '' : 'bottom: -100%;')}

  & > div{
    width: 80%;
    max-width: 350px;
    padding: 10px 0;
    ${s.rowCenter}
  }

  svg{
    width: 22px;
  }
`;

const Text = styled.span`
  ${s.h10}
  font-weight: bold;
  color: ${s.pallete.grey4};
`;

const items = [
  {
    to: '/',
    exact: true,
    text: '둘러보기',
    logo: 'Search',
  },
  {
    to: '/wishlists',
    text: '저장 목록',
    logo: 'Heart',
  },
  {
    to: '/login',
    text: '로그인',
    logo: 'Login',
    shouldAuth: false,
  },
  {
    to: '/trips',
    text: '여행',
    logo: 'Airbnb',
    shouldAuth: true,
  },
  {
    to: '/message',
    text: '메시지',
    logo: 'Message',
    shouldAuth: true,
  },
  {
    to: '/profile',
    text: '프로필',
    logo: 'Profile',
    shouldAuth: true,
  },
];

// https://github.com/facebook/react/issues/14066
function UnderSmNavMenu({ showThreshold }) {
  const show = useShowOverThresholdOrOnScrollUp(showThreshold);
  const { state: isAuth } = useAuthContext();

  return (
    <Show.underSm>
      <StyledXsNavMenu show={show}>
        <div>
          {items.map(({ to, exact, text, shouldAuth, logo }) => {
            if (shouldAuth !== undefined && shouldAuth !== isAuth) {
              return null;
            }

            const Icon = Icons[logo + 'Icon'];

            return (
              <NavItem key={text} to={to} exact={exact}>
                <Icon />
                <Text>{text}</Text>
              </NavItem>
            );
          })}
        </div>
      </StyledXsNavMenu>
    </Show.underSm>
  );
}

export default React.memo(UnderSmNavMenu);
