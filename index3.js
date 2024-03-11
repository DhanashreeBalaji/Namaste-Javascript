//Scope Chain, Scope and Lexical Environment
function a() {
    var b = 10;
    console.log("b inside a is ", b);

    c();
    function c() {
        console.log(b);
    }
}

a();
//console.log("b in global ",b);  //b is not defined

//Scope of 'a'/ Execution context
// Local
// this: Window
// b: 10
// c: ƒ c()

// Global

//Scope of 'c' / Execution context of 'c'
// Local
// Return value: undefined
// this: Window
// Closure (a)

// Global