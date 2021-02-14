import React from 'react';
import { css } from '@emotion/react';
import BaseButton from './BaseButton';

const size = {
  xs: '20px',
  sm: '30px',
  md: '40px',
  lg: '50px',
};

const RoundButton = React.forwardRef((props, ref) => (
  <BaseButton
    ref={ref}
    {...props}
    css={css`
      border-radius: 100%;
      width: ${size[props.size]};
      height: ${size[props.size]};
    `}
  >
    {props.children}
  </BaseButton>
));

export default RoundButton;
