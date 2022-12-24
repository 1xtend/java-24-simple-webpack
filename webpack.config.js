const path = require('path'); //імпортуємо шлях
const outputDir = path.resolve(__dirname, 'dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // код для розробки
  entry: {
    index: './src/index.js',
  }, //вхідна точка
  output: {
    filename: '[name].bundle.js',
    path: outputDir,
    clean: true,
  }, //вихідна точка
  devServer: {
    static: './dist',
    hot: false,
  }, // сервер для запуску

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, // правила для css-loader
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack repeat',
    }), //підключаємо плагін для html
  ],
};
