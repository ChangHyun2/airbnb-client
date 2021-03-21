import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import s from 'S';
import { AirbnbIcon } from '@UI/Icon';

const StyledLogo = styled(Link)`
  ${s.row}
  text-decoration:none;
  flex: 1 0 150px;
  color: ${s.pallete.white};

  svg {
    fill: ${s.pallete.white};
    width: 32px;
    margin-right: 6px;
  }

  리엑트 라우터 페이지 새로고침 시 요청 실패 에러 (can not get)
https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url


span {
    ${s.bold}
    ${s.h22}
    visibility: hidden;
    ${s.over.md(`
      visibility:visible;
    `)}
  }
`;

export default function Logo() {
  return (
    <StyledLogo to="/">
      <AirbnbIcon />
      <span>airbnb</span>
    </StyledLogo>
  );
}
