import $ from 'jquery';

console.log("Teste com jquery");

const body = $('body');

const p = $("<p></p>").text("Inserting text with Jquery").css("color", "red");

body.append(p);