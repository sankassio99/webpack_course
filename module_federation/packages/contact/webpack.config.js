const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9003/'
    },
    devServer: {
        port: 9003,
        historyApiFallback: true
    },
    resolve: {
        extensions: [".jsx", ".js", ".json"]
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: require.resolve("babel-loader"),
                options: {
                    presets: [require.resolve("@babel/preset-react")]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            title: 'App'
        }),
        new ModuleFederationPlugin({
            name: "ContactApp",
            // Arquivo a ser consumido por outro app
            filename: 'remoteEntry.js',
            // App a ser exposto: pode ser mais de um
            exposes: {
                // nome a ser exposto / src do component
                './ContactPage': './src/Contact'
            }
        })
    ]
}