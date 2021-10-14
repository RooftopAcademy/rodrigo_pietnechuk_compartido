const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.ts',
  plugins: [
    new FaviconWebpackPlugin({
      logo: 'public/logo.png',
      cache: true,
      prefix: 'static/img/',
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/svg/[hash][ext][query]',
        },
      },
      {
        test: /\.(ttf|eot|woff2?)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[hash][ext][query]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'static/js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
