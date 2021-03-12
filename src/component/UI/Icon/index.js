import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useWithViewbox } from '@hooks';
import { alignChild, pallete } from 'S';
import path from './path';

const Wrapper = styled.div`
  ${alignChild.rowCenter}
`;

const strokeStyle = css`
  stroke-width: 2px;
  stroke: ${pallete.black};
`;

const createIcon = (svg, isStrokeEmpty) =>
  React.forwardRef(
    ({ xmlns = 'http://www.w3.org/2000/svg', onClick, ...others }, ref) => {
      const svgRef = React.useRef(ref);
      useWithViewbox(svgRef);

      return (
        <Wrapper>
          <svg
            ref={svgRef}
            xmlns={xmlns}
            dangerouslySetInnerHTML={{ __html: svg }}
            css={isStrokeEmpty ? strokeStyle : null}
            {...others}
          />
        </Wrapper>
      );
    }
  );

export const heartIcon = createIcon(path.heart);
export const searchIcon = createIcon(path.search);
export const messageIcon = createIcon(path.message);
export const profileIcon = createIcon(path.profile);
export const loginIcon = createIcon(path.login);
export const AirbnbIcon = createIcon(path.airbnb);
export const googleIcon = createIcon(path.google);
export const facebookIcon = createIcon(path.facebook);
export const houseIcon = createIcon(path.house);
export const adventureIcon = createIcon(path.adventure);
export const helpIcon = createIcon(path.help);
export const emailIcon = createIcon(path.email);
export const profileCardIcon = createIcon(path.profileCard);
export const tropyIcon = createIcon(path.trophy);
export const giftBoxIcon = createIcon(path.giftBox);
export const settingIcon = createIcon(path.setting);
export const arrowLeftIcon = createIcon(path.arrowLeft, true);
export const closeIcon = createIcon(path.close, true);
export const AlertIcon = createIcon(path.alert, true);
export const GlobeIcon = createIcon(path.globe, true);
export const HamburgerIcon = createIcon(path.hamburger, true);

const Icons = {
  heart: heartIcon,
  message: messageIcon,
  Airbnb: AirbnbIcon,
  profile: profileIcon,
  search: searchIcon,
  login: loginIcon,
  Airbnb: AirbnbIcon,
  google: googleIcon,
  close: closeIcon,
  facebook: facebookIcon,
  house: houseIcon,
  email: emailIcon,
  profileCard: profileCardIcon,
  tropy: tropyIcon,
  giftBox: giftBoxIcon,
  setting: settingIcon,
  arrowLeft: arrowLeftIcon,
  Alert: AlertIcon,
  Globe: GlobeIcon,
  Hamburger: HamburgerIcon,
};

export default Icons;
