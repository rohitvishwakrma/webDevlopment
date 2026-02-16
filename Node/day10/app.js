import express from "express";
import connectDB from "../config/db.js";
import debug from "debug";
import User from './model/user.js';

const app = express();
const debuglog = debug( "development:app" );

app.get( '/create', async ( req, res, next ) =>
{
  try
  {
    const user = new User( {
      name: "Mohit",
      age: 21,
      email: "Mohit1@gmail.com",
    } );
    await user.save();
    debuglog( "user created" );
    res.send( user );
  } catch ( err )
  {
    next( err );
  }
} );
app.get( '/read', async ( req, res, next ) =>
{
  try
  {
    const user = await User.findOne( { name: "Rohit" } );
    // const user1 = await User.find({ name: "Rohit" }); // not used
    debuglog( "user read" );
    res.send( user );
  } catch ( err )
  {
    next( err );
  }
} );

app.get( '/update', async ( req, res, next ) =>
{
  try
  {
    const user = await User.findOneAndUpdate(
      { name: "Rohit" },
      { name: "Rohit Vishwakarma" },
      { new: true }
    );
    debuglog( "user name update" );
    res.send( user );
    console.log( user );
  } catch ( err )
  {
    next( err );
  }
} );
// cnnection of data base
connectDB();
// port show
app.listen( 2000, ( req, res ) =>
{
  console.log( "SERVER IS  runing on port 2000.." );

} )