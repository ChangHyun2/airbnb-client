import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useWithViewbox } from '@hooks';
import { alignChild, pallete } from 'S';
import path from './path';

const Wrapper = styled.div`
  ${alignChild.rowCenter}
  svg {
    fill: currentColor;
  }
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

export const HeartIcon = createIcon(path.heart);
export const SearchIcon = createIcon(path.search);
export const MessageIcon = createIcon(path.message);
export const ProfileIcon = createIcon(path.profile);
export const LoginIcon = createIcon(path.login);
export const AirbnbIcon = createIcon(path.airbnb);
export const GoogleIcon = createIcon(path.google);
export const FacebookIcon = createIcon(path.facebook);
export const HouseIcon = createIcon(path.house);
export const AdventureIcon = createIcon(path.adventure);
export const HelpIcon = createIcon(path.help);
export const EmailIcon = createIcon(path.email);
export const ProfileCardIcon = createIcon(path.profileCard);
export const TropyIcon = createIcon(path.trophy);
export const GiftBoxIcon = createIcon(path.giftBox);
export const SettingIcon = createIcon(path.setting);
export const ArrowLeftIcon = createIcon(path.arrowLeft, true);
export const CloseIcon = createIcon(path.close, true);
export const AlertIcon = createIcon(path.alert, true);
export const GlobeIcon = createIcon(path.globe, true);
export const HamburgerIcon = createIcon(path.hamburger, true);

const Icons = {
  heart: HeartIcon,
  message: MessageIcon,
  Airbnb: AirbnbIcon,
  profile: ProfileIcon,
  search: SearchIcon,
  login: LoginIcon,
  google: GoogleIcon,
  close: CloseIcon,
  facebook: FacebookIcon,
  house: HouseIcon,
  email: EmailIcon,
  profileCard: ProfileCardIcon,
  tropy: TropyIcon,
  giftBox: GiftBoxIcon,
  setting: SettingIcon,
  arrowLeft: ArrowLeftIcon,
  Alert: AlertIcon,
  Globe: GlobeIcon,
  Hamburger: HamburgerIcon,
};

export default Icons;
