/* common js export like require */
// const math = require( "./math" );
// console.log( "hello" )
// console.log( "hello vridhi" )

// // console.log( add );
// console.log( math.add( 3, 3 ) );
// //console.log( add.addFnc( 30, 40 ) );

/* es module require */
// import { add, mul, sub } from "./math.js"
import * as math from "./math.js"
console.log( math.add( 75, 80 ) );
console.log( math.sub( 75, 30 ) );
console.log( math.mul( 50, 3 ) );




