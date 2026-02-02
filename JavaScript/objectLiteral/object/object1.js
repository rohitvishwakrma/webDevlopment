// /* obj is key value pair ,which like map/dictionary pairs */
// var details = [ "rohit", 34, 42, 89.0, false ];
// let x = {
//     name: "rohit",
//     age: 32,
//     percentage: 92,
//     'is Married': false,
//     greet ()
//     {
//         console.log( "hello" + " " + x.name );
//     }
// };
// x.greet();
// console.log( x.age );

const { comment } = require( "postcss" );

// console.log( x[ 'age' ] );
const user = {
    email: "rohit@123",
    userName: {
        userFullName: {
            userFirstName: "rohit",
            userLastName: "kumar"
        }
    }
}
console.log( user.userName.userFullName.userFirstName, user.email );

let students = [
    { name: "Rohit", age: 15 },
    { name: "Aman", age: 16 },
    { name: "Neha", age: 15 }
];

console.log( Object.keys( students[ 0 ] ) );
console.log( Object.values( students[ 1 ] ) );
console.log( Object.entries( students[ 0 ] ) );

/* De -srtucturing of the object  */
const product = {
    productName: "Asus",
    price: 344994,
    ram: '4gb'
}
// shortcut create of obj
const { productName: pname, price: pr, ram: r } = product
console.log( pname, pr, r );

/* Api call  */
const api = {

}