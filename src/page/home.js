import React from 'react';
import styled from '@emotion/styled';
import Section from '@UI/Section';
import Notice from './Home/Notice';
import SearchBar from './Home/SearchBar';
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
        <SearchBar />
        <Sections />
      </s.Relative>
    </StyledHome>
  );
}
