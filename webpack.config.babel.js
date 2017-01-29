import { resolve } from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const { PORT } = process.env;

const rootResolve = pathname => resolve(__dirname, pathname);

export default {
  entry: [
    'babel-polyfill',
    rootResolve('client/index.js'),
  ],
  output: {
    path: rootResolve('public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.pug$/,
      loader: 'pug-html-loader',
    }, {
      test: /\.styl$/,
      use: [
        'style-loader',
        'css-loader',
        'stylus-loader',
      ],
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          html: 'pug-html-loader',
          css: 'style-loader!css-loader!stylus-loader',
        },
      },
    }],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: `${rootResolve('client/index.pug')}`,
    }),
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js',
    },
    extensions: ['*', '.js', '.vue'],
    modules: [
      rootResolve('client'),
      'node_modules',
    ],
  },
  devServer: {
    contentBase: rootResolve('client'),
    compress: true,
    port: +PORT || 3000,
    historyApiFallback: true,
  },
};
