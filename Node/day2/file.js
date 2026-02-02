const { error } = require( 'console' );
const fs = require( 'fs' );
fs.writeFileSync( "text.txet", `hello dosto And!` )
fs.readFile( "text.txet", "utf-8", ( error, data ) =>
{
  console.log( data );
}
);
fs.appendFileSync( "text.txet", "Hello ohit" );

fs.unlinkSync( "text.txet" );
// fs.unlink( "text.txet", ( err, data ) =>
// {
//   console.log( data, err )
// } )
// fs.rename( "data.text", "hello.text" );


fs.rename( "data.text", "new.txt", ( err ) =>
{
  if ( err ) console.log( err );
  else console.log( "File Renamed Successfully" );
} );
