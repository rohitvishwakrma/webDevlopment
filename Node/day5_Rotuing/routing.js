const express = require( 'express' );
const app = express();
// dynamic /routes:/parameterName -->"req.params.username "ya `${req.params.username  }`
app.get( "/path/:name", ( req, res ) =>
{
  res.send( `Hello bhai ${ req.params.name } dynamic page` )
} );

app.listen( 4000 );