/* Variable Hoisting with var */
// give the error
console.log( a ); // undefined
var a = 10;

// Hoisting with let & const (Important)

/* console.log( x ); // ReferenceError
let x = 5;

console.log( y ); // ReferenceError
const y = 20; */


//  function hosting
greet();   // Works

function greet ()
{
    console.log( "Hello!" );
}
//Hoisting in Functions (Local Scope)
function test ()
{
    console.log( a ); // undefined
    var a = 20;
}

test();

// Function Expression & Arrow Function Hoisting
console.log( add ); // undefined
var add = function () { };
