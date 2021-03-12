import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { values, alignChild, mediaQuery } from 'S';

const { PAD } = values;
const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Container = forwardRef(
  ({ align, xs, md, lg, children, ...otherProps }, ref) => {
    let dynamicStyle = [];

    align && dynamicStyle.push(alignChild[align]);

    Object.entries({ xs, md, lg }).forEach(
      ([bp, isBp]) =>
        isBp &&
        dynamicStyle.push(`${mediaQuery.over[bp](`padding: 0 ${PAD[bp]}px;`)}`)
    );

    return (
      <StyledContainer
        ref={ref}
        {...otherProps}
        css={css`
          ${dynamicStyle.join('')}
        `}
      >
        {children}
      </StyledContainer>
    );
  }
);

export default Container;
