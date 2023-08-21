const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    mode:"development",
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.css$/i,
            include: path.resolve(__dirname, 'src'),
            use: ['style-loader', 'css-loader', 'postcss-loader'],
          }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({}),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
    ],
}