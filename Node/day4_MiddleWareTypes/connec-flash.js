const express = require( 'express' );
const app = express();
const expresSesion = require( 'express-session' );
const flash = require( 'connect-flash' );
// Session use
app.use( expresSesion( {
  secret: "OJG",
  resave: true,
  saveUninitialized: true
} )
)
// use connect flash
app.use( flash() );
app.get( '/about', function ( req, res, )
{

  req.flash( "error", "invalid" );
  res.send( "/error" );
} )

app.get( '/error', ( req, res ) =>
{
  let msg = req.flash( "error" );
  res.send( msg );
} )

app.listen( 4000 );