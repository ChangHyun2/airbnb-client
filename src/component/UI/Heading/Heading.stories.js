import { css } from '@emotion/react';
import s from 'S';

console.log(s);

export const Heading = () => (
  <div>
    {
      <p
        css={css`
          margin-bottom: 20px;
        `}
      >
        from lib/S
      </p>
    }
    {[10, 12, 14, 16, 18, 22, 32].map((size) => (
      <p
        css={css`
          ${s[`h${size}`]};
          margin-bottom: 1em;
        `}
      >{`h${size}`}</p>
    ))}
  </div>
);

export default {
  title: 'Heading',
  component: Heading,
};
