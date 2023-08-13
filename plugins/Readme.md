Extra funcionalities to webpack

# Extract CSS to a own file

To extract from html head, is idealy be in another file.

`MiniCSSExtractPlugin`

```jsx
npm i -D mini-css-extract-plugin
```

```jsx
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
```

```jsx
plugins: [
    new MiniCssExtractPlugin({
        filename: 'styles.css'
    })
]
```

Will be created a new file in ./dist to styles.css

Needs to be refered in .html file.

# Minificar Javascript

`TerserPlugin`

```jsx
optimization: {
	minimize: true,
	minimuzer: [new TerserPlugin()]
}
```

# Global constants

`DefinePlugin`

```jsx
// global constants
new webpack.DefinePlugin({
    VERSION: JSON.stringify('1.0.2'),
    PORT: JSON.stringify('8080')
})
```

# Config .env file

create .env file

```jsx
plugins: [
    new DotenvPlugin()
]
```

```jsx
// accessing .env file
console.log(process.env.API_KEY);
```

# Autogenerate HTML file

auto link to js and css files, 

`HtmlWebpackPlugin`

```jsx
new HtmlWebpackPlugin()
```

# Cache

[contenthash] in filename

each build has a new builded file name, to avoid cache problems

```jsx
output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
},
```

Use for all generated files

This avoid problems when is generated new version of the code and the browser uses the old version

## Duplication build files

`CleanWebpackPlugin`

For each build, the ./dist file is cleanered

```jsx
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
```

```jsx
new CleanWebpackPlugin(),
```