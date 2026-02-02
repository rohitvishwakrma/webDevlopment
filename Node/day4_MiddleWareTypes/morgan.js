const express = require( 'express' );
const morgan = require( 'morgan' );
const app = express();

// app.use( morgan( "dev" ) );
app.use( morgan( "tiny" ) );
app.use( morgan( "combined", {
  skip: function ( req, res ) { return res.statusCode < 400 }
} ) );
app.get( "/", ( req, res ) =>
{
  res.send( "Morgan middleware" );
} );

app.listen( 4000 );