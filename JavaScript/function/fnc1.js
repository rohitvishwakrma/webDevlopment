
// /* fnc call */
// function greetme(greet,fulname)
// {
//     console.log("hello",fulname)
//     greet();
// }

//  function greet(){
//     console.log( "Greet for me the day")
// }
// greetme(greet,"rohit");


// /* fnc retruning  */
// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }
// let ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns);


/*  fnc use in data structure */
//  



/*  as a obj */
// let obj={
//     age:25,
//     wt:64,
//     ht:180,
//     greet:()=>{
//         console.log("hello duiniya!");
//     }
// }
// console.log(obj.age);
// obj.greet();

function goodMorinig ()
{
    console.log( "gm" );

}
goodMorinig();
const add = function ( a, b )
{
    return ( a + b );
}
console.log( add( 3, 4 ) );

// anoymoys fnc # this function is run at most last when all fnc  are runnned after this will be runned.
const set = setTimeout( function ()
{
    console.log( "Hello" );
}, 1000 );

console.log( set );   // print the declear var

set;  // call the varible name 

// Arrow fnc
const mult = ( a, b ) => a * b;
console.log( mult( 2, 3 ) );

//Constructor Function
function Person ( name, age )
{
    this.name = name;
    this.age = age;
}

let p1 = new Person( "Rohit", 15 );
console.log( p1 );

// Async Function (ES8)
let ans = async function fetchData ()
{
    return "Data received";
}
console.log( ans );