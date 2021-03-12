## main.js

스토리북 웹팩 추가 환경 설정  
스토리북이 최신 패키지를 지원하지 않아 node_modules를 resolve할 때 구버전 path를 찾게되므로 수정해줘야됨

```js
const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
          '@emotion/css': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          S: toPath('src/lib/S/index.js'),
          '@variable': toPath('src/variable/index.js'),
          '@UI': toPath('src/component/UI'),
          '@hooks': toPath('src/hooks/index.js'),
          '@context': toPath('src/context'),
          '@component': toPath('src/component'),
          '@util': toPath('src/util'),
        },
      },
    };
  },
};
```

## preview.js

import css 

```js
import '../src/css/index.css';
import '../src/css/normalize.css';
import '../src/css/reset.css';
import '../src/css/theme.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

```

## babel.rc

바벨 설정도 맞춰줘야됨

```js
{
  "presets": [
    ["@babel/preset-env"],
    [
      "@babel/preset-react",
      {
        "runtime": "automatic",
        "importSource": "@emotion/react"
      }
    ]
  ],
  "plugins": [
    "@emotion",
    "@babel/plugin-transform-react-display-name",
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "helpers": true,
        "regenerator": true,
        "useESModules": false,
        "version": "7.0.0-beta.0"
      }
    ]
  ]
}

```