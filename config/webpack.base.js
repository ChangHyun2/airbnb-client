const paths = require('./paths');
const path = require('path');
const dotenv = require('dotenv').config({ path: paths.dotenv });
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const aliases = {
  '@': '',
  '@UI': 'component/UI',
  '@data': 'data',
  '@component': 'component',
  '@context': 'context',
  '@hooks': 'hooks/index.js',
  '@util': 'util/index.js',
  '@variable': 'variable/index.js',
  '@api': 'api',
  '@page': 'page',
  '@routes': 'routes',
  S: 'lib/S/index.js',
  Former: 'lib/Former/index.js',
};
Object.keys(aliases).forEach((importName) => {
  const pathName = aliases[importName];

  const absolutePath = path.resolve(paths.appSrc, pathName);
  aliases[importName] = absolutePath;
});

const commonConfig = {
  entry: {
    index: paths.appIndexJs,
  },
  resolve: {
    extensions: paths.moduleFileExtensions.map((ext) => `.${ext}`),
    alias: aliases,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': dotenv.parsed,
    }),
    new CleanWebpackPlugin(),
  ],
};
module.exports = commonConfig;
