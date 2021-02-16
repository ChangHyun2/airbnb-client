import { forwardRef } from 'react';
import { css } from '@emotion/react';
import Container from '@UI/Container';
import s from 'S';

const Section = forwardRef(
  ({ mb = 4, children, align, ...otherProps }, ref) => (
    <Container
      ref={ref}
      align={align}
      xs
      sm
      md
      lg
      css={css`
        ${s['mb' + mb]}
      `}
      {...otherProps}
    >
      {children}
    </Container>
  )
);

export default Section;
