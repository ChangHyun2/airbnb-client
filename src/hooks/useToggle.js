import React from 'react';

const useToggle = (initialOn = false) => {
  const [onState, setOnState] = React.useState(initialOn);

  const setOn = () => setOnState(true);
  const setOff = () => setOnState(false);
  const toggle = () => setOnState((prev) => !prev);

  return {
    on: onState,
    toggle,
    setOn,
    setOff,
  };
};

export default useToggle;
