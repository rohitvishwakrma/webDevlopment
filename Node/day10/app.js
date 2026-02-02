const express = require( 'express' );
const app = express();
const connectDB = require( './config/db' );
const debuglog = require( 'debug' )( "development:app" );
const createUser = require( './model/user' );
// insert user scehma 
app.get( '/create', async ( req, res, next ) =>
{
  const user = await createUser.create( {
    name: "Mohit",
    age: 21,
    email: "Mohit1@gmail.com",
  } )
  // svae the data 
  user.save();

  //  console.log( "user save " );
  debuglog( "user created" );

  res.send( user );
} );
//schema read ,finOne, find(all values show),findOneAndUpdate(update name) ,
app.get( '/read', async ( req, res, next ) =>
{
  const user = await createUser.findOne( { name: "Rohit" } );
  const user1 = await createUser.find( { name: "Rohit" } );
  debuglog( "user read" );
  res.send( user );
} )

app.get( '/update', async ( req, res, next ) =>
{
  const user = await createUser.findOneAndUpdate( { name: "Rohit" }, { name: "Rohit Vishwakarma" }, { new: true } );
  debuglog( "user name update" );
  res.send( user );
  console.log( user );

} )
// cnnection of data base
connectDB();
// port show
app.listen( 2000, ( req, res ) =>
{
  console.log( "SERVER IS  runing on port 20000.." );

} )