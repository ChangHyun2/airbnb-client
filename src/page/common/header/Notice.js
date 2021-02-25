import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { GhostButton } from '@UI/Button';
import s from 'S';

const StyledNotice = styled.div`
  ${s.rowCenter}
  ${s.textCenter}
  ${s.fluid};
  background-color: ${s.pallete.black}
  padding: 20px;
  ${s.h14};
  color: ${s.pallete.grey0};
`;

export default function Notice() {
  const locatoin = useLocation();
  console.log(location);
  return (
    <StyledNotice>
      <GhostButton
        underline
        href="https://www.airbnb.co.kr/resources/hosting-homes?persona=guest"
      >
        에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.
      </GhostButton>
    </StyledNotice>
  );
}
