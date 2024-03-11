//Shadowing 

var c = 100;
function x() {
    var c = 30;
    console.log(window.c); //100
    window.c = 20;
}
x();
console.log(c); //20

//----------------------------------------------------------------------------------

const con = 3;   //Script con:3
function f() {   // f() has its own execution context
    const con = 30;
    console.log(con);   //30
    console.log(c);    //20   from lexical env of parent of f() i.e., Global
}
f();
console.log(con);  //3
console.log(c) //20


//Execution context of f()  /Lexical env of f()
// Local
// this: Window
// con: 30
// Script
// con: 3
// Global

