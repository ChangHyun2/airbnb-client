import React from 'react';
import styled from '@emotion/styled';
import Show from '@component/Show';
import Notice from './Home/Notice';
import XsOnlySearchBar from './Home/XsOnlySearchBar';
import OverSmHeader from './Home/OverSmHeader';
import Sections from './Home/Sections';
import s from 'S';

const StyledHome = styled.div`
  background-color: ${s.pallete.black};
`;

export default function home() {
  return (
    <StyledHome>
      <Notice />
      <s.Relative>
        <Show.onlyXs>
          <XsOnlySearchBar />
        </Show.onlyXs>
        <Show.overSm>
          <OverSmHeader />
        </Show.overSm>
        <Sections />
      </s.Relative>
    </StyledHome>
  );
}
