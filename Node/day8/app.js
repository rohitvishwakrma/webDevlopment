const express = require( 'express' );
const app = express();

var data = [ 1, 2, 3, 4, 5 ];


app.get( '/data', ( req, res ) =>
{
  res.send( data );
} )
app.post( '/data/:number', ( req, res ) =>
{
  data.push( parseInt( req.params.number ) );
  res.send( data );
} )

app.listen( 2000 );