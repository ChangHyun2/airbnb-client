import React from 'react';
import styled from '@emotion/styled';
import ContainerComponent from './index';
import s from 'S';

export default {
  title: 'Container',
  component: ContainerComponent,
};

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
    <p>change xs, sm, md, lg props and resize your window</p>
    <p>padding ~xs: 24px , ~sm: 40px , ~md: 60px , ~lg: 80px</p>
    <>
      <p>Custom Container</p>
      <StyledContainer align={props.align} {...props} style={{ height: 70 }}>
        <Grid1>Grid1</Grid1>
        <Grid1>Grid1</Grid1>
        <Grid3>Grid3</Grid3>
      </StyledContainer>
    </>
    {['flex'].map((align) => (
      <>
        <p>{`align : ${align}`}</p>
        <StyledContainer align={align} {...props} style={{ height: 30 }}>
          <Grid>Grid</Grid>
          <Grid1>Grid1</Grid1>
          <Grid3>Grid3</Grid3>
        </StyledContainer>
      </>
    ))}
    {['flex', 'row', 'rowCenter', 'rowSpaceBetween'].map((align) => (
      <>
        <p>{`align : ${align}`}</p>
        <StyledContainer align={align} {...props} style={{ height: 30 }}>
          <Grid1>Grid1</Grid1>
          <Grid1>Grid1</Grid1>
          <Grid3>Grid3</Grid3>
        </StyledContainer>
      </>
    ))}
    {['col', 'colCenter', 'colSpaceBetween'].map((align) => (
      <>
        <p>{`align : ${align}`}</p>
        <StyledContainer align={align} {...props} style={{ height: 80 }}>
          <Grid3>Grid3</Grid3>
          <Grid3>Grid3</Grid3>
          <Grid3>Grid3</Grid3>
        </StyledContainer>
      </>
    ))}
  </Wrapper>
);

const argTypes = {
  align: {
    control: {
      type: 'select',
      options: [
        'flex',
        'row',
        'rowCenter',
        'rowSpaceBetween',
        'col',
        'colCenter',
        'colSpaceBetween',
      ],
    },
    defaultValue: 'flex',
  },
};
['xs', 'sm', 'md', 'lg'].forEach((bp) => {
  argTypes[bp] = {
    control: {
      type: 'boolean',
    },
    defaultValue: true,
  };
});
Container.argTypes = argTypes;
