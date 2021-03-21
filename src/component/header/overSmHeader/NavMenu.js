import styled from '@emotion/styled';
import s from 'S';
import { PillButton } from '@UI/Button';
import { GlobeIcon } from '@UI/Icon';
import ProfileMenu from './navMenu/ProfileMenu';
import LocalSetting from '@component/dialogs/LocalSetting';
import { Transition } from 'react-transition-group';
import Modal from '@UI/Modal';
import { useToggle } from '@hooks';

const StyledPillButton = styled(PillButton)`
  ${s.h14}
  background-color: transparent;
  border-color: transparent;
  transition: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 16px;
    height: 16px;
    fill: currentcolor;
    stroke: ${s.pallete.white};
    stroke-width: 0.2px;
  }
  margin-left: -10px;
`;

const StyledNavMenu = styled(s.RowEnd)`
  flex: 1 0 150px;

  svg {
    fill: currentcolor;
  }
`;

export default function NavMenu() {
  const languageModalToggle = useToggle(false);

  return (
    <StyledNavMenu>
      <StyledPillButton size="md" href="#">
        호스트 되기
      </StyledPillButton>
      <StyledPillButton
        IconComponent={GlobeIcon}
        size="md"
        onClick={languageModalToggle.setOn}
      />
      <ProfileMenu />
      <Modal show={languageModalToggle.on} onClose={languageModalToggle.setOff}>
        <LocalSetting onClose={languageModalToggle.setOff} />
      </Modal>
    </StyledNavMenu>
  );
}
