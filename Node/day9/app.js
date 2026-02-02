const express = require( 'express' );
const app = express();
const fs = require( 'fs' );
const path = require( 'path' );


// ejs
app.set( 'view engine', 'ejs' );

// middleware to read body
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

// folder path
const filesDir = path.join( __dirname, 'files' );
app.use( "/day9", express.static( filesDir ) );


app.get( "/check", ( req, res ) =>
{
  const today = new Date();

  const dd = String( today.getDate() ).padStart( 2, "0" );
  const mm = String( today.getMonth() + 1 ).padStart( 2, "0" );
  const yyyy = today.getFullYear();

  const formattedDate = `${ dd }-${ mm }-${ yyyy }`;

  console.log( `${ mm }-${ dd }-${ yyyy }` );
  fs.writeFile( path.join( filesDir, "date.txt" ), formattedDate, ( err ) =>
  {
    if ( err )
    {
      console.log( err );
      res.status( 500 ).send( "Error saving file " );
    } else
    {
      res.send( formattedDate ); //  fixed variable name
    }
  } );
} );

app.listen( 4000 );