const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        // global constants
        new webpack.DefinePlugin({
            VERSION: JSON.stringify('1.0.2'),
            PORT: JSON.stringify('8080')
        })
    ]
}