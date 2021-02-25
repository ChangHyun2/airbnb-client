import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import s from 'S';
import Show from '@component/Show';
import { Logo, NavMenu, RoomAdventureTabs } from './overSmHeader/index';

const StyledOverSmHeader = styled.header`
  ${s.absolute}
  z-index: 1;
  ${s.baseContainer({ align: 'rowSpaceBetween' })}

  padding-top: ${s.padXs};
  padding-bottom: ${s.padXs};
`;

const FormContext = React.createContext({});
const FormContextProvider = (props) => (
  <FormContext.Provider value={props.value}>
    {props.children}
  </FormContext.Provider>
);

const FindRoomForm = () => {};

const FindAdventureForm = () => {};

export default function OverSmHeader() {
  return (
    <Show.overSm>
      <StyledOverSmHeader>
        <Logo />
        <RoomAdventureTabs />
        <NavMenu />
      </StyledOverSmHeader>
    </Show.overSm>
  );
}
