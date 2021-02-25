import { useRef } from 'react';
import styled from '@emotion/styled';
import Section from '@UI/Section';
import { PillButton } from '@UI/Button';
import { useDetectSticked } from '@hooks';
import { searchIcon } from '@UI/Icon';
import s from 'S';

const StyledSearchBar = styled(Section)`
  ${s.absolute}
  z-index: 1;
  width: 100%;

  transition: background-color 0.5s;

  button {
    cursor: text;
    margin: 14px 0;
    width: 100%;
    ${s.bold}
    ${s.h14}
    transition: background-color 0.5s;
  }

  ${({ sticked }) =>
    sticked &&
    `
      position:fixed;
      top:0;

      background-color: ${s.pallete.white};
      button{
        background-color: ${s.pallete.grey0}
      }
  `}
`;

const SearchIcon = styled(searchIcon)`
  width: 20px;
  fill: ${s.pallete.primary};
  margin-right: 2px;
`;

export default function XsOnlySearchBar() {
  const ref = useRef();
  const sticked = useDetectSticked(ref);

  return (
    <StyledSearchBar ref={ref} sticked={sticked}>
      <PillButton size="md" variant="white" IconComponent={SearchIcon}>
        어디로 여행가세요?
      </PillButton>
    </StyledSearchBar>
  );
}
