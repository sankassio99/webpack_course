const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: 'http://localhost:9004/',
      filename: 'main.js'
    },
    mode:"development",
    devServer: {
        historyApiFallback: true,
        port: 9004,
        historyApiFallback: true
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
        new ModuleFederationPlugin({
            name: "VueApp",
            filename: 'remoteEntry.js',
            // App a ser exposto: pode ser mais de um
            exposes: {
                // nome / src
                './VueAppHome': './src/bootstrap'
            },
        })
    ],
    
}