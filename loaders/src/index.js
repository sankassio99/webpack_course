import Title from './components/title.js';
import Image from './components/image.js';
import Button from './components/button.js';
import './styles/warning.css'
import warningTemplate from './templates/warning.html'
import jsonFile from './files/jsonFile.json'

const title = new Title();

title.create("First page");

const image = new Image();
const button = new Button();

image.insertImage();
button.create();

// Babel Spread - compiled by webpack babel-loader
const obj = { a:1, b: 2, c: 3, d: 4 };

let {a, b, ...teste} = obj;

console.log(a);
console.log(b);
console.log(teste);

// HTML import
const body = document.querySelector("body");
body.innerHTML += warningTemplate 

// JSON file import
const pessoa = jsonFile;
console.log(pessoa);