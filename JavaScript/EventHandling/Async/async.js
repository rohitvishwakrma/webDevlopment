console.log( "Start" );

setTimeout( () =>
{
    console.log( "After 2 seconds" );
}, 2000 );

console.log( "End" );

setInterval( () =>
{
    console.log( "Repeating..." );
}, 1000 );

let promise = new Promise( resolve =>
{
    resolve( "Promise resolved!" );
} );

promise.then( console.log );
