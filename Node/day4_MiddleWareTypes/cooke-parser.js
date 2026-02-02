const express = require( 'express' );
const cooke = require( 'cookie-parser' );
const app = express();

app.use( cooke() );
app.get( '/check', ( req, res ) =>
{
  //read cookies
  console.log( req.cookies.about );
  res.send( "cookie read" )
} )
app.get( '/about', ( req, res ) =>
{
  res.cookie( "about", "true" );   // save data on browser
  res.send( "hello I am about page with cooke-parser!" )
} );

app.listen( 8000 );