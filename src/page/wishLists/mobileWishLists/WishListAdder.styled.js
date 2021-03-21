import styled from '@emotion/styled';
import s from 'S';

import { Button, RoundButton } from '@UI/Button';

export const Header = styled.div`
  ${s.spaceBetween}
  border-bottom: 1px solid #eee;
  h2 {
    ${s.h16};
    ${s.textCenter};
    ${s.bold};
  }

  // align H2 to center
  span:last-type-of {
    visibility: invisible;
    padding: 23px;
  }
`;

export const CloseButton = styled(RoundButton)`
  padding: 10px;
  margin: 13px;
  div {
    ${s.size(11, 11)}
    stroke-width: 3px;
    fill: none;
    ${({ theme: { black2 } }) => `
    stroke: ${black2};
  `}
  }
  svg {
    ${s.size(11, 11)}
    stroke-width: 3px;
    fill: none;
    ${({ theme: { black2 } }) => `
    stroke: ${black2};
  `}
  }
`;

export const Body = styled.div`
  padding: 3em;
`;

export const InputBox = styled.div`
  padding: 7px 10px;
  height: 55px;
  border-radius: 8px;
  border: 1px solid #aaa;
  margin: 3em auto;
  &:focus {
    border: 3px;
  }
`;

export const Foot = styled.div`
  ${s.spaceBetween}
  border-top: 1px solid #eee;
  padding: 15px 25px 15px 10px;
`;

export const SaveButton = styled(Button)`
  ${s.bold}
  ${s.h16}
padding: 14px 25px;
  border-radius: 7px;
  border: none;
  ${({ theme: { white, black2 } }) => `
  color:${white}
  background-color: ${black2}
`}
`;

export const CancelButton = styled(Button)`
  ${s.bold}
  ${s.h16}
padding: 0 13px;
  height: 40px;
  border-radius: 7px;
  border: none;
  text-decoration: underline;
  ${({ theme: { white, whiteGrey0 } }) => `
  background-color: ${white};
  &:hover {
    background-color: ${whiteGrey0};
  }
`}
`;
