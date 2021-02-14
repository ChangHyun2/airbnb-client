### issue

- babelrc파일을 .storybook에 따로 옮겨줘야됨
- storybook이 emotion을 node_modules에서 찾을 때 구버전을 찾기 때문에 생기는 에러 : main.js 수정
```js
//main.js
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

