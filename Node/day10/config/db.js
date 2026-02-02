const mongoose = require( 'mongoose' );
const connectDB = async () =>
{
  try
  {
    mongoose.connect( "mongodb+srv://rohitvishwakarma02198:Vish020899@cluster1.xyymlkt.mongodb.net/TestTB" );
    console.log( "Mongodb is connected.." );

  }
  catch ( err )
  {
    console.log( "mongodb is not connected!" );

  }
}
module.exports = connectDB;