/* setTime and SetInterval */
let id=setInterval(() => {
    console.log("hello Rohit!");
}, 2000);
setTimeout(() => {
    console.log(id);
}, 10000);
