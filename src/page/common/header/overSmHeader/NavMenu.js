import styled from '@emotion/styled';
import s from 'S';
import { PillButton } from '@UI/Button';
import { GlobeIcon } from '@UI/Icon';
import ProfileMenu from './navMenu/ProfileMenu';

const StyledNavMenu = styled(s.RowEnd)`
  flex: 1 0 150px;

  svg {
    fill: currentcolor;
  }

  a,
  button:not(:last-of-type) {
    ${s.h14}
    background-color: transparent;
    border-color: transparent;
    transition: none;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  & button:not(:last-of-type) {
    svg {
      width: 16px;
      height: 16px;
      fill: currentcolor;
      stroke: ${s.pallete.white};
      stroke-width: 0.2px;
    }
    margin-left: -10px;
  }
`;

export default function NavMenu() {
  return (
    <StyledNavMenu>
      <PillButton size="md" href="#">
        호스트 되기
      </PillButton>
      <PillButton IconComponent={GlobeIcon} size="md" />
      <ProfileMenu />
    </StyledNavMenu>
  );
}
