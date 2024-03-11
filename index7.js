//ILLEGAL SHADOWING

var a = 20;
{
    var a =100;
}
console.log(a)

//---------------------------------------------------------------------------
// let l = 20;
// {
//     var l = 20;
// }

// Uncaught SyntaxError: Identifier 'l' has already been declared (at index7.js:11:10)
//----------------------------------------------------------------------------

var v = 20;
{
    let v = 10;
    console.log(v); //10
}
console.log(v);  //20

//----------------------------------------------------------------------------
let m = 20;
function vfn() {
 var m = 19;       //This var is function scope
 console.log(m);  //19
}
vfn()
console.log(m)  //20


//===================================================Lexical Block Scope======================//
const vars = 20;  //Script vars:20
{
    const vars = 100;  //Block  vars:100
    {
        const vars = 200;  //Block vars:200
        console.log(vars);
    }
    console.log(vars);
}
console.log(vars);  //If the const vars = 20 is not present then error comes here as var is not defined