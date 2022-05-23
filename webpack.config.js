const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: [path.resolve(__dirname, 'src/index.ts')],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: path.resolve(__dirname, '/assets/'),
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        loader: 'url-loader'
      },
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: false,
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: false
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  devtool: 'source-map',
  devServer: {
    open: true,
    hot: true,
    static: path.resolve(__dirname, 'dist'),
    host: '0.0.0.0',
  },
}