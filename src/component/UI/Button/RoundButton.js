import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import BaseButton from './BaseButton';
import { values, pallete } from 'S';

const { SPACING } = values;

const sizes = {
  xs: `${SPACING[20]}px`,
  sm: `${SPACING[30]}px`,
  md: `${SPACING[40]}px`,
  lg: `${SPACING[50]}px`,
};

const StyledRoundButton = styled(BaseButton)`
  position: relative;
  background: none;
  border: none;

  :not(:disabled):hover {
    box-shadow: none;
  }

  ::before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
  }

  * {
    z-index: 1;
  }
`;

export const RoundButton = React.forwardRef(
  ({ variant, size, children, ...otherProps }, ref) => {
    const dynamicStyles = [
      ` 
      ::before{ 
        width: ${sizes[size]};
        height: ${sizes[size]};
        background-color: ${pallete[variant]};
      }
    `,
    ];

    let variantStyle;
    switch (variant) {
      case 'white':
        variantStyle = `
          :hover::before{
            background-color: ${pallete.whiteGrey0};
          }
        `;
        break;

      case 'inverted':
        variantStyle = `
          :hover::before{
            border: 1px solid black;
          }
        `;
        break;

      default:
        variantStyle = `
        `;
    }

    dynamicStyles.push(variantStyle);

    return (
      <StyledRoundButton
        ref={ref}
        variant={variant}
        css={css`
          ${dynamicStyles.join('')}
        `}
        {...otherProps}
      >
        {children}
      </StyledRoundButton>
    );
  }
);

export default RoundButton;
