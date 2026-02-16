import mongoose from "mongoose";
const connectDB = async () =>
{
  try
  {
    await mongoose.connect( "mongodb+srv://rohitvishwakarma02198:Vish020899@cluster1.xyymlkt.mongodb.net/TestTB" );
    console.log( "Mongodb is connected.." );
  } catch ( err )
  {
    console.log( "mongodb is not connected!" );
  }
};
export default connectDB;