import React from 'react';
import { css } from '@emotion/react';
import BaseButton from './BaseButton';

const padding = {
  xs: '2px 4px',
  sm: '7px 15px',
  md: '10px 20px',
  lg: '13px 23px',
};

const borderRadius = {
  xs: '4px',
  sm: '8px',
  md: '8px',
  lg: '8px',
};

const Button = React.forwardRef(
  ({ size = 'sm', children, ...otherProps }, ref) => {
    return (
      <BaseButton
        ref={ref}
        css={css`
          padding: ${padding[size]};
          border-radius: ${borderRadius[size]};
        `}
        {...otherProps}
        size={size}
      >
        {children}
      </BaseButton>
    );
  }
);

export default Button;
