import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ContainerComponent from './index';
import s from 'S';
import Button from '@UI/Button';

export default {
  title: 'Container',
  component: ContainerComponent,
};

// common argTypes
const argTypes = {};
[
  'flex',
  'row',
  'rowCenter',
  'rowSpaceBetween',
  'col',
  'colCenter',
  'colSpaceBetween',
].forEach((prop) => {
  argTypes[prop] = {
    control: {
      type: 'boolean',
    },
    defaultValue: true,
  };
});

const Wrapper = styled.div`
  font-size: 14px;
  p {
    margin-bottom: 20px;
  }
  button {
    margin-bottom: 30px;
  }
`;

const gridStyle = `
  height: 20px;
  box-shadow: 0 0 1px #777;
  &:hover {
    box-shadow: 0 0 0 1px #000;
  }
`;
const Grid = styled(s.Grid)`
  ${gridStyle}
`;
const Grid1 = styled(s.Grid1)`
  ${gridStyle}
`;
const Grid3 = styled(s.Grid3)`
  ${gridStyle}
`;

const StyledContainer = styled(ContainerComponent)`
  box-shadow: 0 0 1px #777;
  margin-bottom: 50px;
`;

// Container
export const Container = (props) => (
  <Wrapper>
    <p>padding: xs ~ sm : 20px , sm ~ lg : 40px , lg ~ : 80px</p>
    {['flex'].map((alignChild) => (
      <>
        <p>{`${alignChild} : ${props[alignChild]}`}</p>
        <StyledContainer
          style={{ height: 30 }}
          {...{ [alignChild]: props[alignChild] }}
        >
          <Grid>Grid</Grid>
          <Grid1>Grid1</Grid1>
          <Grid3>Grid3</Grid3>
        </StyledContainer>
      </>
    ))}
    {['flex', 'row', 'rowCenter', 'rowSpaceBetween'].map((alignChild) => (
      <>
        <p>{`${alignChild} : ${props[alignChild]}`}</p>
        <StyledContainer
          style={{ height: 30 }}
          {...{ [alignChild]: props[alignChild] }}
        >
          <Grid1>Grid1</Grid1>
          <Grid1>Grid1</Grid1>
          <Grid3>Grid3</Grid3>
        </StyledContainer>
      </>
    ))}
    {['col', 'colCenter', 'colSpaceBetween'].map((alignChild) => (
      <>
        <p>{`${alignChild} : ${props[alignChild]}`}</p>
        <StyledContainer
          style={{ height: 80 }}
          {...{ [alignChild]: props[alignChild] }}
        >
          <Grid3>Grid3</Grid3>
          <Grid3>Grid3</Grid3>
          <Grid3>Grid3</Grid3>
        </StyledContainer>
      </>
    ))}
  </Wrapper>
);
Container.argTypes = argTypes;
