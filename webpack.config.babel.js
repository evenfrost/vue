import { resolve } from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const rootResolve = pathname => resolve(__dirname, pathname);

export default {
  entry: rootResolve('client/index.js'),
  output: {
    path: rootResolve('public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [{
      test: /\.pug$/,
      exclude: /node_modules/,
      loader: 'pug',
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${rootResolve('client/index.pug')}`,
    }),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js',
    },
  },
  devServer: {
    contentBase: rootResolve('client'),
  },
};
