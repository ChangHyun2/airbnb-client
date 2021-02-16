import React from 'react';
import styled from '@emotion/styled';

import BaseButton from './BaseButton';
import NormalButton from './Button';
import PillButton from './PillButton';
import FluidButton from './FluidButton';
import RoundButton from './RoundButton';
import GhostButton from './GhostButton';
import { googleIcon, facebookIcon } from '@UI/Icon';
import { TripleDotLoading } from '@UI/Loading';

export default {
  title: 'Button',
};

// Helper Components for storybook rendering

const LoadingComponentMap = {
  GreyLoading: TripleDotLoading,
  BlackLoading: () => <TripleDotLoading colors={['#000', '#333', '#666']} />,
  PinkLoading: () => <TripleDotLoading colors={['#fff', '#fcc', '#f99']} />,
};

const GoogleIcon = styled(googleIcon)`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;
const FacebookIcon = styled(facebookIcon)`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

const IconComponentMap = { GoogleIcon, FacebookIcon };

// common argTypes
const argTypes = {
  LoadingComponent: {
    control: {
      type: 'select',
      options: [null].concat(Object.keys(LoadingComponentMap)),
    },
  },
  theme: {
    control: {
      type: 'select',
      options: [
        null,
        'black',
        'white',
        'primary',
        'secondary',
        'inverted',
        'shadow',
      ],
    },
    defaultValue: 'primary',
  },
  isActive: {
    control: {
      type: 'boolean',
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    defaultValue: 'sm',
  },
  children: {
    control: {
      type: 'text',
    },
    defaultValue: 'BUTTON',
  },
  effect: {
    control: {
      type: 'select',
      options: [null, 'outline', 'scaleDown'],
    },
  },
  href: {
    control: {
      type: 'text',
    },
  },
  target: {
    control: {
      type: 'select',
      options: [null, '_blank', '_self', '_parent', '_top'],
    },
  },
};

const getTemplate = (Component) => (props) => (
  <>
    <div>
      {['xs', 'sm', 'md', 'lg'].map((size) => (
        <Component
          {...props}
          size={size}
          LoadingComponent={LoadingComponentMap[props.LoadingComponent]}
          IconComponent={IconComponentMap[props.IconComponent]}
          style={{ margin: '5px' }}
        >
          {size}
        </Component>
      ))}
    </div>
    <Component
      {...props}
      LoadingComponent={LoadingComponentMap[props.LoadingComponent]}
      IconComponent={IconComponentMap[props.IconComponent]}
      style={{ margin: '5px' }}
    >
      {props.children}
    </Component>
  </>
);

// BaseButton
export const Base = getTemplate(BaseButton);
Base.argTypes = argTypes;

// Button
export const Button = getTemplate(NormalButton);
Button.argTypes = argTypes;

// PillButton
export const Pill = getTemplate(PillButton);
Pill.argTypes = argTypes;

// FluidButton
export const Fluid = getTemplate(FluidButton);
Fluid.argTypes = {
  ...argTypes,
  IconComponent: {
    control: {
      type: 'select',
      options: [null].concat(Object.keys(IconComponentMap)),
    },
  },
};

// RoundButton
export const Round = getTemplate(RoundButton);
Round.argTypes = {
  ...argTypes,
  children: {
    ...argTypes.children,
    defaultValue: 'B',
  },
  LoadingComponent: null,
};

// GhostButton
export const Ghost = (props) => (
  <GhostButton underline={props.underline} {...props}>
    {props.text}
  </GhostButton>
);
Ghost.argTypes = {
  text: {
    control: 'text',
    defaultValue: 'airbnb',
  },
  href: {
    control: 'text',
    defaultValue: '',
  },
  underline: {
    control: 'boolean',
  },
  effect: {
    control: {
      type: 'select',
      options: [null, 'underline'],
    },
    defaultValue: 'underline',
  },
};
