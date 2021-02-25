import React from 'react';
import styled from '@emotion/styled';
import XsOnlySearchBar from './Home/XsOnlySearchBar';
import Show from '@component/Show';
import Sections from './Home/Sections';
import s from 'S';

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
