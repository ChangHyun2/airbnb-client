import React from 'react';
import { TripleDotLoading as TripleDot } from './index';

export default {
  title: 'Loading',
};

const argTypes = {
  size: {
    control: {
      type: 'number',
    },
    defaultValue: 10,
  },
  color1: {
    control: {
      type: 'color',
    },
  },
  color2: {
    control: {
      type: 'color',
    },
  },
  color3: {
    control: {
      type: 'color',
    },
  },
};

export const TripleDotLoading = (props) => (
  <>
    <h2>size : {props.size}</h2>
    <p>You can adjust size and colors in controls tab</p>
    <TripleDot
      size={props.size}
      colors={[props.color1, props.color2, props.color3]}
    />
  </>
);

TripleDotLoading.argTypes = argTypes;
