const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader');

const config = {
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src')
    },
    extensions: ['.vue', '.js', '.css', '.scss', '.json']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../public')
    },
    client: {
      overlay: {
        errors: false,
        warnings: false,
      },
      progress: true,
    },
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 9000,
  },
  stats: {
    errorDetails: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|bmp)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[ext]',
          esModule: false
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[ext]',
          esModule: false
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]',
          esModule: false
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.html')
    })
  ]
};

module.exports = config;