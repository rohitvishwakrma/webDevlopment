const express = require( 'express' );
const app = express();
app.set( "view engine", "ejs" );

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

app.set( "views", path.join( __dirname, "views" ) );
app.get( '/', ( req, res ) =>
{
  res.render( "home", { name: "rohit" } );
} );
app.post( "/create", function ( req, res )
{
  console.log( req.body );

} )
app.listen( 2000 );