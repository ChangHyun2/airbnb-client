import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import s from 'S';

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const pad = [s.padXs, s.padMd, s.padLg];

const Container = forwardRef(
  ({ align, xs, md, lg, children, ...otherProps }, ref) => {
    let dynamicStyle = [];

    align && dynamicStyle.push(s[align]);

    Object.entries({ xs, md, lg }).forEach(
      ([bp, isBp], i) =>
        isBp && dynamicStyle.push(`${s.over[bp](`padding: 0 ${pad[i]}`)}`)
    );

    return (
      <StyledContainer
        ref={ref}
        {...otherProps}
        css={css`
          ${dynamicStyle.join(';')}
        `}
      >
        {children}
      </StyledContainer>
    );
  }
);

export default Container;
