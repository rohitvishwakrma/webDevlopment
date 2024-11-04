// function outerfnc(){
//     // define varible
//     let x=5;
//     let y=6;
//    function innerfnc(){
//         let b=20;
//         console.log(b);
//     }
//     console.log(b);
//     innerfnc();
// }

let greet ="hello ";
function changeGreet(){
    let greet ="nameste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
    innerGreet();
}
console.log(greet);
changeGreet();
/* inner function cann't be access outside  */
