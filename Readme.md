# Loaders

# Css
Create a css file

Import in your js file 

```jsx
import './title.css';
```

Use in webpack config

```jsx
module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            }
        ]
    }
```

dont forget to download npm dependencies

```jsx
npm i -D style-loader css-loader
```

Just run build

# Imagens

```jsx
{
	test: /\.(png|jpg|jpeg)$/,
	use: [
	    'file-loader'
	]
}
```

# Sass import

We gonna need

`style-loader, css-loader, sass-loader`

```jsx
npm i -D node-sass sass-loader
```

```jsx
{
    test: /\.scss$/,
    use: [
        'style-loader', 'css-loader', 'sass-loader'
    ]
}
```

# ES6+ future functionality

`babel-loader;`

This example it’s only to this functionality - Spread 

```jsx
// Babel Spread - compiled by webpack babel-loader
const obj = { a:1, b: 2, c: 3, d: 4 };

let {a, b, ...teste} = obj;

console.log(a);
console.log(b);
console.log(teste);
```

```jsx
{
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        // what you need to run the extra functionality
        options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
    }
}
```

# Html

`htm-loader`

```jsx
{
    test: /\.html$/,
    use: 'html-loader'
},
```

```jsx
import warningTemplate from './templates/warning.html'
```

```jsx
// HTML import
const body = document.querySelector("body");
body.innerHTML += warningTemplate
```

# Text
`Raw-loader`

For import plain text

.txt

# Json
Don’t needs loaders

```jsx
// JSON file import
import jsonFile from './files/jsonFile.json'
const pessoa = jsonFile;
console.log(pessoa);
```

```jsx
// output
{name: 'José', idade: 22, rule: 'dev'}
```

# Tips
Keep minimu loaders to get better performance