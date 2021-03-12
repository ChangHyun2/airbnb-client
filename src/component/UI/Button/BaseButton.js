import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { pallete, typo, baseComponent, RowCenter, effect } from 'S';

const {
  white,
  black,
  primary,
  secondary,
  grey0,
  grey1,
  grey5,
  grey6,
  whiteGrey0,
} = pallete;

const variants = {
  black: {
    bg: black,
    border: black,
    color: white,
  },
  white: {
    bg: white,
    border: white,
    color: black,
  },
  primary: {
    bg: primary,
    border: primary,
    color: white,
  },
  secondary: {
    bg: secondary,
    border: secondary,
    color: white,
  },
  inverted: {
    bg: white,
    border: grey6,
    color: black,
  },
  shadow: {
    bg: white,
    border: grey1,
    color: black,
  },
};

const fontSize = {
  xs: typo.h12,
  sm: typo.h14,
  md: typo.h16,
  lg: typo.h18,
};

const ChildrenWrapper = styled(RowCenter)`
  width: 100%;
  height: 100%;
`;

const Text = styled.span`
  vertical-align: middle;
`;

const staticStyle = `
  ${baseComponent.baseButton} 
  ${typo.bold}
  &:disabled {
    background-color: ${grey0};
    border: 1px solid ${grey0};
    color: ${grey5};
  }
  transition: box-shadow 0.25s;
`;

export const BaseButton = React.forwardRef(function button(
  {
    disabled = false,
    children,
    href,
    target,
    isActive = false,
    LoadingComponent,
    variant = 'primary',
    size = 'sm',
    effect,
    IconComponent = null,
    ...otherProps
  },
  ref
) {
  const Component = href ? 'a' : 'button';

  const dynamicStyles = [staticStyle];

  if (size) {
    dynamicStyles.push(fontSize[size]);
  }

  if (variant) {
    const { bg, border, color } = variants[variant];
    dynamicStyles.push(`
      background-color: ${bg};
      border: 1px solid ${border};
      color: ${color};
    `);

    switch (variant) {
      case 'inverted':
        dynamicStyles.push(`
          &:not(:disabled):hover{
            border-color: ${black}
          }
        `);
        break;

      case 'shadow':
        dynamicStyles.push(`
          -webkit-transition: box-shadow .25s linear;
          -moz-transition: box-shadow .25s linear;
          -o-transition: box-shadow .25s linear;
          transition: box-shadow .25s linear

          box-shadow: inset 0 0 2px rgba(0,0,0,0.08);
          &:not(:disabled):hover{
            box-shadow: 0 0 1px #eee, 0 1px 2px #eee, 0px 3px 2px #eee;
          }
        `);
        break;

      case 'white':
        dynamicStyles.push(`
          &:hover{
            background-color: ${whiteGrey0};
          }
        `);
        break;

      default:
        dynamicStyles.push(`
        &:not(:disabled):hover{
          box-shadow: inset 0 0 30px rgba(0,0,0,0.08);
        }`);
    }
  }

  if (effect) {
    switch (effect) {
      case 'scaleDown':
        dynamicStyles.push(`
          &:active{
            transition: transform 0.3s;
            transform: scale(0.90);  
          }
        `);
        break;

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

  const childrenComponent = (
    <ChildrenWrapper>
      {IconComponent ? (
        <IconComponent width={fontSize[size]} height={fontSize[size]} />
      ) : null}
      <Text>{children}</Text>
    </ChildrenWrapper>
  );

  return (
    <Component
      {...otherProps}
      ref={ref}
      disabled={disabled}
      href={href}
      target={target}
      css={css`
        ${dynamicStyles.join('')}
      `}
    >
      {LoadingComponent ? (
        isActive ? (
          <LoadingComponent />
        ) : (
          childrenComponent
        )
      ) : (
        childrenComponent
      )}
    </Component>
  );
});

export default BaseButton;
