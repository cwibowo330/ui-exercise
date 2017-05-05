const path = require('path');
const webpack = require('webpack');

const env = process.env.NODE_ENV || 'development';
const currentEnv = JSON.stringify(env);

module.exports = {
  devtool:   'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
  // externals: {
  //   'react/addons':                   true,
  //   'react/lib/ExecutionEnvironment': true,
  //   'react/lib/ReactContext':         true,
  // },
  entry: [
    'babel-polyfill',
    path.join(__dirname, './index.js'),
  ],
  module: {
    loaders: [
      {
        test:    /\.js$/,
        loader:  'babel-loader',
        query:   { cacheDirectory: true },
      },
      {
        test:   /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query:  { name: '[name].[hash:16].[ext]' },
      },
    ],
  },
  output: {
    filename:   'bundle.js',
    path:       path.resolve(__dirname, 'public'),
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': currentEnv }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
  resolve: {
    extensions: ['.web.js', '.jsx', '.js'],
  },
};
