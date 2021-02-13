import React from 'react';
import { useToggle } from '@hooks';

const AuthContext = React.createContext({});

export const AuthContextProvider = (props) => {
  const auth = useToggle(props.initialState);
  const helpers = {
    setOn: () => auth.setOn(),
    setOff: () => auth.setOff(),
  };

  return (
    <AuthContext.Provider
      {...props}
      value={{
        state: auth.on,
        helpers,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);
