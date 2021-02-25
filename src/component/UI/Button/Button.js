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
  ({ size = 'sm', children, effect, ...otherProps }, ref) => {
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
                border-radius: 13px;
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
        effect={effect}
        size={size}
      >
        {children}
      </BaseButton>
    );
  }
);

export default Button;
