import React from 'react';
import { Global, css } from '@emotion/react';

export const decorators = [
  (story) => (
    <>
      <Global
        styles={css`
          body {
          }
        `}
      />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
