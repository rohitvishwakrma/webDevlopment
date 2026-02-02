const express = require( 'express' );
const cors = require( 'cors' );

const app = express();
//middle ware
app.use( cors() );
//  cors frontend s browser p data secuire krta h origin,methos,credentials

app.get( '/', ( req, res ) =>
{
  res.send( "Hello bhai server" );
} )
app.listen( 8000 );