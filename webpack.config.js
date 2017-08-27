const path = require('path');

// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['raw-loader', 'pug-html-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Impact Media',
      hash: true,
      template: './src/index.pug'
    }),
  ]
}
