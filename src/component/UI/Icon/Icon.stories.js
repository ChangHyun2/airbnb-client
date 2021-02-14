import { css } from '@emotion/react';
import Icons from './index';

import s from 'S';

export default {
  title: 'Icon',
};

const argTypes = {
  width: {
    control: {
      type: 'number',
    },
    defaultValue: '30',
  },
  height: {
    control: {
      type: 'number',
    },
    defaultValue: '30',
  },
  stroke: {
    control: {
      type: 'color',
    },
  },
  strokeWidth: {
    control: {
      type: 'number',
    },
  },
};

export const Icon = ({ width, height, stroke, strokeWidth }) => (
  <div>
    {Object.keys(Icons).map((key) => {
      const Icon = Icons[key];
      Icon.displayName = key.slice(0, 1).toUpperCase() + key.slice(1) + 'Icon';

      return (
        <s.Row style={{ marginBottom: '30px' }}>
          <span style={{ width: '100px' }}>{key}</span>
          <Icon
            key={key}
            width={width}
            height={height}
            css={css`
              stroke-width: ${strokeWidth}px;
              stroke: ${stroke};
            `}
          />
        </s.Row>
      );
    })}
  </div>
);
Icon.argTypes = argTypes;
