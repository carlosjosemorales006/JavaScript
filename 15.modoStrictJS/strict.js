"use strict";

 let x=3.14; // ReferenceError: x is not defined

console.log(x); // ReferenceError: x is not defined

miFuncion();

function miFuncion(){   
    
    y=3.14; // ReferenceError: y is not defined
    console.log(y); // ReferenceError: y is not defined
}