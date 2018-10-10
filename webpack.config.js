const path = require('path');
const Webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  // Entry.
  entry: './src/index.js',

  // Output.
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  // Module.
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      
      {
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },

      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        loader: 'file-loader',
        exclude: /node_modules/,
      },
    ]
  },
  
  // Plugins.
  plugins: [
    new Webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({ template: './src/index.html' })
  ],

  // Dev Tool.
  devtool: env.mode === 'development' ? 'cheap-eval-source-map' : 'source-map',

  // Development Server.
  devServer: {
    historyApiFallback: true,
  },

  mode: env.mode
});