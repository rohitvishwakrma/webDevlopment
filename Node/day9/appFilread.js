// API endpoint to delete a file
app.post( "/delete", ( req, res ) =>
{
  const { filename } = req.body;
  if ( !filename )
  {
    return res.status( 400 ).send( "Filename is required." );
  }
  const filePath = path.join( __dirname, "files", filename );
  fs.unlink( filePath, ( err ) =>
  {
    if ( err )
    {
      return res.status( 500 ).send( "Error deleting file." );
    }
    res.send( "File deleted successfully." );
  } );
} );
const express = require( 'express' );
const app = express();
const fs = require( 'fs' );
const path = require( 'path' );

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( __dirname, 'views' ) );


app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

app.get( "/", ( req, res ) =>
{
  fs.readdir( path.join( __dirname, "files" ), ( err, files ) =>
  {
    if ( err )
    {
      return res.status( 500 ).send( "Error reading files directory" );
    }
    res.render( "index", { files } );
  } );
} );

// API endpoint to edit a file automatically
app.post( "/edit", ( req, res ) =>
{
  const { filename, content } = req.body;
  if ( !filename || typeof content !== "string" )
  {
    return res.status( 400 ).send( "Filename and content are required." );
  }
  const filePath = path.join( __dirname, "files", filename );
  fs.writeFile( filePath, content, ( err ) =>
  {
    if ( err )
    {
      return res.status( 500 ).send( "Error writing to file." );
    }
    res.send( "File updated successfully." );
  } );
} );


app.listen( 3300 );