import styled from '@emotion/styled';
import s from 'S';
import { airbnbIcon, globeIcon, hamburgerIcon } from '@UI/Icon';
import { PillButton } from '@UI/Button';

const OverMdNavBar = styled.div`
  ${s.relative}
  z-index: 1;
  ${s.baseContainer({ align: 'rowBetween' })}

  padding-top: ${s.padXs};
  padding-bottom: ${s.padXs};
`;

const Logo = styled(airbnbIcon)`
  fill: ${s.pallete.primary};
`;

export default function overMdNavBar() {
  return (
    <OverMdNavBar>
      <div>
        <Logo />
        <span>airbnb</span>
      </div>
      <div></div>
      <div>
        <PillButton>호스트 되기</PillButton>
        <PillButton>호스트 되기</PillButton>
        <PillButton>호스트 되기</PillButton>
      </div>
    </OverMdNavBar>
  );
}
