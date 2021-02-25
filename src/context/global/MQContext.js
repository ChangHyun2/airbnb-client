import React from 'react';
import { useMQ } from '@hooks';
import { breakpoint } from '@variable';

const { sm, md, lg, xl } = breakpoint;

const MQContext = React.createContext({});

export const MQContextProvider = (props) => {
  const isOnlyXs = useMQ(`screen and (max-width: ${sm}px)`);
  const isOverSm = useMQ(`screen and (min-width: ${sm}px)`);
  const isSmToMd = useMQ(
    `screen and (min-width: ${sm}px) and (max-width: ${md}px)`
  );
  const isOverMd = useMQ(`screen and (min-width: ${md}px)`);
  const isUnderMd = useMQ(`screen and (max-width: ${md}px)`);
  const isUnderSm = useMQ(`screen and (max-width: ${sm}px)`);
  const isOverXl = useMQ(`screen and (min-width: ${xl}px)`);
  const isUnderXl = useMQ(`screen and (max-width: ${xl}px)`);

  return (
    <MQContext.Provider
      value={{
        isOnlyXs,
        isOverSm,
        isSmToMd,
        isOverMd,
        isUnderSm,
        isUnderMd,
        isOverXl,
        isUnderXl,
      }}
    >
      {props.children}
    </MQContext.Provider>
  );
};

export const useMQContext = () => React.useContext(MQContext);
/*

only
~ to ~
over ~
~ under

*/
