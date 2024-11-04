
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
let obj={
    age:25,
    wt:64,
    ht:180,
    greet:()=>{
        console.log("hello duiniya!");
    }
}
console.log(obj.age);
obj.greet();