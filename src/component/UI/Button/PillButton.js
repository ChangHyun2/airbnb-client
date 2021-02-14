import React from 'react';
import { css } from '@emotion/react';
import BaseButton from './BaseButton';

const padding = {
  xs: '4px 8px',
  sm: '8px 10px',
  md: '12px 14px',
  lg: '16px 20px',
};

const borderRadius = {
  xs: '12px',
  sm: '16px',
  md: '24px',
  lg: '30px',
};

const PillButton = React.forwardRef(
  ({ size, children, ...otherProps }, ref) => {
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

export default PillButton;
