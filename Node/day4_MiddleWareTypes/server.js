const express = require( 'express' );
const app = express();
app.use( ( req, res, next ) =>
{
  res.end( "Hello bhai m middle ware hu.." );
  next();
} )

app.get( '/', function ( req, res, )
{
  res.send( "hello bhai" );
} )
app.get( '/hello', function ( req, res, )
{
  res.send( "hello" );
} )
app.listen( 2001, () => 
{
  console.log( "hello bhai , consloe" )
} );
