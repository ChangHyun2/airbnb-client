import React from 'react';
import styled from '@emotion/styled';
import s from 'S';
import XsOnlySearchBar from './Home/XsOnlySearchBar';
import Sections from './Home/Sections';
import Show from '@component/Show';

const StyledHome = styled.div`
  ${s.relative}
  background-color: ${s.pallete.black};
`;

export default function home() {
  return (
    <StyledHome>
      <Show.onlyXs>
        <XsOnlySearchBar />
      </Show.onlyXs>
      <Sections />
    </StyledHome>
  );
}
