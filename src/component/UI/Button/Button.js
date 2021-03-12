import React from 'react';
import { css } from '@emotion/react';
import BaseButton from './BaseButton';
import { values } from 'S';

const { ROUND } = values;

const padding = {
  xs: '2px 4px',
  sm: '7px 15px',
  md: '10px 20px',
  lg: '13px 23px',
};

const borderRadius = {
  xs: ROUND.xs + 'px',
  sm: ROUND.sm + 'px',
  md: ROUND.sm + 'px',
  lg: ROUND.sm + 'px',
};

const Button = React.forwardRef(
  ({ size = 'sm', children, effect, ...otherProps }, ref) => {
    const dynamicStyles = [];

    if (effect) {
      switch (effect) {
      }
    }

    dynamicStyles.push(`
      padding: ${padding[size]};
      border-radius: ${borderRadius[size]};
    `);

    return (
      <BaseButton
        {...otherProps}
        ref={ref}
        css={css`
          ${dynamicStyles.join('')}
        `}
        effect={effect}
        size={size}
      >
        {children}
      </BaseButton>
    );
  }
);

export default Button;
