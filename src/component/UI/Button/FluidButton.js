import React from 'react';
import { css } from '@emotion/react';
import Button from './Button';

const FluidButton = React.forwardRef((props, ref) => (
  <Button
    ref={ref}
    {...props}
    css={css`
      width: 100%;
    `}
  >
    {props.children}
  </Button>
));

export default FluidButton;
