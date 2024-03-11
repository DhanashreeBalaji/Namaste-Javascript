//Hoisting in Javascript

console.log(x);

console.log(getNName);
console.log(getName);
var x=7;
// function getNName () {
//     console.log("Hi");
// }

var getNName = () => {
    console.log("Hi");
}
var getName = function () {
    console.log("Another way of writing function");
}
console.log(x);
getNName();
getName();