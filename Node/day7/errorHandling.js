const express = require( 'express' );
const app = express();
//  type error !!
// app.fet( "/route", function ( req, res )
// {
//   res.send( "hey " )
// } )

app.get( "/route", function ( req, res )
{
  try
  {
    res.send( " hey" );
  }
  catch ( err )
  {
    next( err );
  }
} )

app.get( '/', ( req, res ) =>
{
  try
  {
    res.send( Hello );
  } catch ( err )
  {
    next( err );
  }
} )

// error handler
app.use( ( err, req, res, next ) =>
{
  res.status( 400 ).send( "Invalid routes" );
} )
app.listen( 2000 );