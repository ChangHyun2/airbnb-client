import styled from '@emotion/styled';
import { css } from '@emotion/react';
import s from 'S';

const StyledContainer = styled.div`
  width: 100%;

  ${s.xsOnly(`
    padding: 0 24px;
  `)}
  ${s.over.sm(`
    padding: 0 40px;
  `)}
  ${s.over.lg(`
    padding: 0 80px;
  `)}  
`;

const Container = (props) => {
  let dynamicStyle;

  if (props.flex) {
    dynamicStyle = s.flex;
  } else if (props.row) {
    dynamicStyle = s.row;
  } else if (props.rowCenter) {
    dynamicStyle = s.rowCenter;
  } else if (props.rowSpaceBetween) {
    dynamicStyle = s.rowSpaceBetween;
  } else if (props.col) {
    dynamicStyle = s.col;
  } else if (props.colCenter) {
    dynamicStyle = s.colCenter;
  } else if (props.colSpaceBetween) {
    dynamicStyle = s.colSpaceBetween;
  }

  if (!dynamicStyle) {
    dynamicStyle = s.flex;
  }

  return (
    <StyledContainer
      {...props}
      css={css`
        ${dynamicStyle}
      `}
    >
      {props.children}
    </StyledContainer>
  );
};

export default Container;
