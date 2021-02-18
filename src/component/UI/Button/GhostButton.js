import React from 'react';
import s from 'S';
import { css } from '@emotion/react';

const linkStaticStyle = s.baseLink;
const buttonStaticStyle = `
  ${s.baseButton}
  border:none;
`;

export const GhostButton = React.forwardRef(
  (
    {
      children,
      href,
      target = '_blank',
      underline,
      effect = 'underline',
      ...otherProps
    },
    ref
  ) => {
    const Tag = href ? 'a' : 'button';
    const dynamicStyles = [href ? linkStaticStyle : buttonStaticStyle];

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

    return (
      <Tag
        href={href}
        target={target}
        css={css`
          ${dynamicStyles.join('')}
        `}
        ref={ref}
        {...otherProps}
      >
        {children}
      </Tag>
    );
  }
);
export default GhostButton;
