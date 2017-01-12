import { resolve } from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const rootResolve = pathname => resolve(__dirname, pathname);

export default {
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    rootResolve('client/index.js'),
  ],
  output: {
    path: rootResolve('public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [{
      test: /\.pug$/,
      exclude: /node_modules/,
      loader: 'pug-html',
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
    }, {
      test: /\.vue$/,
      exclude: /node_modules/,
      loader: 'vue',
    }, {
      test: /\.styl$/,
      exclude: /node_modules/,
      loader: 'style!css!stylus',
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: `${rootResolve('client/index.pug')}`,
    }),
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.js',
    },
    extensions: ['', '.js', '.vue'],
    root: rootResolve('client'),
  },
  devServer: {
    contentBase: rootResolve('client'),
    publicPath: '/',
  },
  vue: {
    loaders: {
      html: 'pug',
      css: 'style!css!stylus',
    },
  },
};
