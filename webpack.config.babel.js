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
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.pug$/,
      loader: 'pug-loader',
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
          html: 'pug-loader',
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
      vue$: 'vue/dist/vue.js',
    },
    extensions: ['*', '.js', '.vue', '.jsx'],
    modules: [
      rootResolve('client'),
      'node_modules',
    ],
  },
  devServer: {
    contentBase: rootResolve('client'),
    compress: true,
    port: +PORT || 3000,
  },
};
