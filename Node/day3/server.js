const http = require( 'http' );
const server = http.createServer( function ( req, res )
{
  // console.log( req );

  // res.end( "hello! friend" );

  if ( http.url === '/' )
  {
    res.end( "Hello !" );
  }
  else if ( http.url === '/product' )
  {
    res.end( "profuct page!" );
  }
  else
  {
    res.end( "page not found!" )
  }
} )
server.listen( 3000 );
