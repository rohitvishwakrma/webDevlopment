const { Blinds } = require( "lucide-react" );

// global scope
console.log( this );

// function mode use this
/* function abc ()
{
    console.log( this );

}
abc();
window.abc() */

// Arrow function 
const obj = {
    name: "Rohit",
    fun: () =>
    {
        const abc = () =>
        {
            let a = 20;
            console.log( this.a );  // still undefined (because arrow keeps global this)
            console.log( this.name );

        };
        abc();
    }
};

obj.fun();
obj.abc;


// using call() ,apply() ,blind()
// call() ==>> pas arguments

function print ()
{
    console.log( this.name );
}
const user = {
    name: "Vridhi"
}
print.call( user );

// apply method ==>>pass array 
function greet ()
{
    console.log( "Hello " + this.name, "age " + this.age, "mobile No:" + this.no );
}
const person = {
    name: "Rani", age: 26, no: 2353252
}
greet.apply( person );

//blind ()==>> return new function
function pray ()
{
    console.log( `Hey God ` + this.bless );
}
const Man = {
    bless: "Blessing Me"
}
// it store a new var that returns function  
const newFnc = pray.bind( Man );

//return a function
newFnc();