//let and const in Javascript Temporal Dead Zone
//Syntax error || Reference error || Type error

// let and const declarations are hoisted in different ways

console.log(b)  //undefined
//console.log(a)  //index4.js:7 Uncaught ReferenceError: Cannot access 'a' before initialization
//But a& c are allocated memory but value not initialized inside 'Script' scope-> a: <value unavailable>  c: <value unavailable>
// a and c is in TEMPORAL DEAD ZONE. [Till any let and const variables are initialized those will be in TDZ]

let a = 10;  
//Till line 8 it is Temporal Dead Zone, till the time the let varialbe is initialized with some value. The let variable 'a' is not inside Global
//The let and const variables are inside Script Scope, not in global scope as var declarations.
console.log(a) //10
var b = 20;
console.log(b)
const c = 9;
console.log(c);

// let x = 5;
// let x = 10;
// Uncaught SyntaxError: Identifier 'x' has already been declared (at index4.js:20:5)

var x = 5;
var x = 10;
console.log(x); //10
//Redeclaration possible in case of var

let m = 5;
m=10;
console.log(m); //10
//Reinitialization possible in case of let. Dont write let again for same variable

// const con = 1000;
// con = 10;
// console.log(con) 
//index4.js:34 Uncaught TypeError: Assignment to constant variable.


// const s;
// s = 10; 
//Uncaught SyntaxError: Missing initializer in const declaration

