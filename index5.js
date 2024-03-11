//BLOCK SCOPE and SHADOWING IN Javascript
// if(true)
// {
//     var a =10;
//     let b = 5;
//     const c = 2;
// }  //b & c died after the block

// console.log(a); //10
// console.log(b);  //index5.js:9 Uncaught ReferenceError: b is not defined


// Block
// b: <value unavailable>
// c: <value unavailable></value>
//When the block finishes the variables b & c are deleted
//--------------------------------------------------------------------------------------------//

var a = 100;
console.log(a);  //100
{
    var a =10;     
              //SHADOWING HAPPENED.  Means noe in global object a is replaced with 10 instead of 100. Only one a exists and that is in global memory.
    let b = 5;
    const c = 2;
    console.log(a); //  10
    console.log(b);
    console.log(c);
}
 console.log(a);  //10
//---------------------------------------------------------------------------------------//

 let b = 100;   //Script:  b: 100
 {
    var a = 25;  //Global a:25
    let b = 20;
    const c = 30;
    console.log(a)
    console.log(b)
    console.log(c);
 }  //Here block value dies for b 20 and c 30
 
 console.log(b); //100