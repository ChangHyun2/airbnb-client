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

export const PillButton = React.forwardRef(
  ({ size, effect, children, ...otherProps }, ref) => {
    const dynamicStyles = [];

    if (effect) {
      switch (effect) {
        case 'outline':
          dynamicStyles.push(`  
              position:relative;
      
              &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: calc(100% + 10px);
                height: calc(100% + 10px);
                border: 1px solid transparent;
                border-radius: ${size !== 'lg' ? '24px' : '30px'};
                transition: border-color 0.7s;
              }
          
              &:focus::before {
                border-color: #555;
              }
            `);
          break;
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
        size={size}
      >
        {children}
      </BaseButton>
    );
  }
);

export default PillButton;
