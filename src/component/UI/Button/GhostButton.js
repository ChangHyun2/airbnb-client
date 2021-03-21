import React from 'react';
import { NavLink } from 'react-router-dom';
import { baseComponent } from 'S';
import { css } from '@emotion/react';

const linkStaticStyle = `
  ${baseComponent.baseLink}
`;

const NavLinkStaticStyle = `
  text-decoration:none;
  display: inline-block;
`;
const buttonStaticStyle = `
  ${baseComponent.baseButton}
  border:none;
`;

export const GhostButton = React.forwardRef(
  (
    {
      children,
      href,
      to,
      target,
      underline = false,
      effect = 'underline',
      ...otherProps
    },
    ref
  ) => {
    const Tag = href ? 'a' : to ? NavLink : 'button';
    const dynamicStyles = [
      href ? linkStaticStyle : to ? NavLinkStaticStyle : buttonStaticStyle,
    ];

    if (underline) {
      dynamicStyles.push('text-decoration: underline;');
    }

    if (effect) {
      switch (effect) {
        case 'underline':
          dynamicStyles.push(`
            :hover{
              text-decoration: underline;
            }
          `);
          break;
      }
    }

    if (to) {
      dynamicStyles.push(`

      `);
    }

    return (
      <Tag
        ref={ref}
        href={href}
        to={to}
        target={target}
        css={css`
          ${dynamicStyles.join('')}
        `}
        {...otherProps}
      >
        {children}
      </Tag>
    );
  }
);
export default GhostButton;
