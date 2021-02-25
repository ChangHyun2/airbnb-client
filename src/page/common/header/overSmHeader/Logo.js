import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import s from 'S';
import { AirbnbIcon } from '@UI/Icon';

const StyledLogo = styled(Link)`
${s.row}
text-decoration:none;
flex: 1 0 150px;

svg {
  fill: ${s.pallete.white};
  width: 32px;
  margin-right: 6px;
}

span {
    ${s.bold}
    ${s.h22}
    color: ${s.pallete.white};
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
