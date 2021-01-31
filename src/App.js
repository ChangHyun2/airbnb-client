import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Test = styled.div`
  color: red;
`;

export default function App() {
  return (
    <>
      <h1
        css={css`
          color: orange;
        `}
      >
        assdsdsssdsdssdsd
      </h1>
      <Test>hello</Test>
    </>
  );
}
