import React from 'react';
import { css } from '@emotion/react';
import BaseButton from './BaseButton';

const size = {
  xs: '20px',
  sm: '30px',
  md: '40px',
  lg: '50px',
};

export const RoundButton = React.forwardRef((props, ref) => {
  const dynamicStyles = [
    `
    border-radius: 100%;
    width: ${size[props.size]};
    height: ${size[props.size]};
  `,
  ];

  if (props.effect) {
    switch (props.effect) {
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
              border-radius: 100%;
              transition: border-color 0.7s;
            }
        
            &:focus::before {
              border-color: #555;
            }
          `);
        break;
    }
  }

  return (
    <BaseButton
      ref={ref}
      css={css`
        ${dynamicStyles.join('')}
      `}
      {...props}
    >
      {props.children}
    </BaseButton>
  );
});

export default RoundButton;
