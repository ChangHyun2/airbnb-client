import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import s from 'S';

const { white, black, primary, secondary, grey0, grey5, grey6 } = s.pallete;

const themes = {
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
};

const fontSize = {
  xs: '12px',
  sm: '14px',
  md: '15px',
  lg: '16px',
};

const Text = styled.span`
  vertical-align: middle;
`;

const staticStyles = `
  ${s.baseButton}

  &:disabled {
    background-color: ${grey0};
    border: 1px solid ${grey0};
    color: ${grey5};
  }

  transition: box-shadow 0.25s;
`;

const StyledBaseButton = styled.button`
  ${staticStyles}
`;

const StyledBaseLinkButton = styled.a`
  ${staticStyles}
`;

const BaseButton = React.forwardRef(function button(
  {
    disabled = false,
    children,
    href,
    isActive = false,
    LoadingComponent,
    theme = 'primary',
    size = 'sm',
    effect,
    IconComponent = null,
    ...otherProps
  },
  ref
) {
  const Component = href ? StyledBaseLinkButton : StyledBaseButton;

  const childrenComponent = (
    <s.RowCenter>
      {IconComponent ? (
        <IconComponent width={fontSize[size]} height={fontSize[size]} />
      ) : null}
      <Text>{children}</Text>
    </s.RowCenter>
  );

  const dynamicStyles = [];

  if (size) {
    dynamicStyles.push(`
      font-size: ${fontSize[size]};
    `);
  }

  if (theme) {
    const { bg, border, color } = themes[theme];
    dynamicStyles.push(`
      background-color: ${bg};
      border: 1px solid ${border};
      color: ${color};
    `);

    dynamicStyles.push(`
      &:hover {
        ${
          theme === 'inverted'
            ? `border-color: ${black}`
            : `box-shadow: inset 0 0 30px rgba(0,0,0,0.08);`
        }
      }
    `);
  }

  dynamicStyles.push(`fontsize:${fontSize[size]};`);

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

    case 'scaleDown':
      dynamicStyles.push(`
        &:active{
          transition: transform 0.3s;
          transform: scale(0.90);  
        }
      `);
  }

  return (
    <Component
      ref={ref}
      theme={theme}
      disabled={disabled || isActive}
      href={href}
      size={size}
      effect={effect}
      css={css`
        ${dynamicStyles.join('')}
      `}
      {...otherProps}
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
