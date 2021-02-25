import React from 'react';
import s from 'S';
import { useToggle } from '@hooks';
import Button from '@UI/Button';
import BackdropComponent from './index';

export default {
  title: 'Backdrop',
  component: BackdropComponent,
};

// Backdrop
export const Backdrop = (props) => {
  const showBackdrop = useToggle(false);

  return (
    <>
      <p>This backdrop component is used with useToggle hook</p>
      {showBackdrop.on ? (
        <BackdropComponent onClick={showBackdrop.setOff}>
          {props.children}
        </BackdropComponent>
      ) : null}
      <Button onClick={showBackdrop.setOn}>toggle showBackdrop state</Button>
    </>
  );
};

const argTypes = {
  show: {
    control: {
      type: 'boolean',
    },
  },
  bgColor: {
    control: {
      type: 'color',
    },
  },
};

Backdrop.argTypes = argTypes;
