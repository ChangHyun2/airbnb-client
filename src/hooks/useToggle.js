import React from 'react';

const useToggle = (initialOn = false) => {
  const [onState, setOnState] = React.useState(initialOn);

  const setOn = React.useCallback(() => setOnState(true), []);
  const setOff = React.useCallback(() => setOnState(false), []);
  const toggle = React.useCallback(() => setOnState((prev) => !prev), []);

  return {
    on: onState,
    toggle,
    setOn,
    setOff,
  };
};

export default useToggle;
