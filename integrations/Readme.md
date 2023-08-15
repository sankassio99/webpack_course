
# Modes

```python
mode: 'production'
mode: 'development'
```

# Development mode

to debug

using frameworks

# Production mode

When to deploy

Optimized

# Configuration

Create a file for each type of environment build

package.json

```jsx
"scripts": {
    "build": "webpack",
    "dev": "webpack --config webpack.dev.config.js",
    "prod": "webpack --config webpack.prod.config.js"
},
```

# Dev server

```jsx
npm i -D webpack-dev-server
```

```jsx
devServer: {
	contentBase: path.resolve(__dirname, './dist'),
	index: 'index.html',
	port: 3000,
	historyApiFallback: {
		index: 'index.html'
	}
}
```

You gonna need the `HtmlWebpackPlugin` Plugin

package.json

```jsx
"dev": "webpack serve --config webpack.dev.config.js",
```