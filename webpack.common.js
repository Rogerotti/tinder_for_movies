/* eslint-disable */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlWebPackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
    entry: {
      app: './src/app.js',
        
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        },
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              cacheDirectory: true,
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ["@babel/plugin-proposal-class-properties"]
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        { 
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        },
        ],
    },
    plugins: [htmlWebPackPlugin],
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            src: path.resolve(__dirname, 'src/'),
            l10n: path.resolve(__dirname, 'l10n/'),
            images: path.resolve(__dirname, 'images/'),
        },
        extensions: ['.js', '.jsx'],
    }
};