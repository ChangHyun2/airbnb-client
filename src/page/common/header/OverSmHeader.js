import React from 'react';
import styled from '@emotion/styled';
import s from 'S';
import Show from '@component/Show';
import OverMdSearchBar from '@page/Home/OverMdSearchBar';
import { Logo, NavMenu, RoomAdventureTabs } from './overSmHeader/index';

const StyledOverSmHeader = styled.header`
  ${s.absolute}
  z-index: 1;
  ${s.baseContainer({ align: 'rowSpaceBetween' })}

  padding-top: ${s.pad.xs};
  padding-bottom: ${s.pad.xs};
`;

const FormContext = React.createContext({});
const FormContextProvider = (props) => (
  <FormContext.Provider value={props.value}>
    {props.children}
  </FormContext.Provider>
);

export default function OverSmHeader() {
  return (
    <Show.overSm>
      <StyledOverSmHeader>
        <Logo />
        <OverMdSearchBar />
        <NavMenu />
      </StyledOverSmHeader>
    </Show.overSm>
  );
}
