import User from "../../day10/model/user.js";
import nodemailer from "nodemailer";

export const registerUser = async ( req, res, next ) =>
{
  try
  {
    const { name, age, email, password } = req.body;
    if ( !name || !age || !email || !password )
    {
      return res.status( 400 ).json( { message: "All fields are required." } );
    }

    const existingUser = await User.findOne( { email } );
    if ( existingUser )
    {
      return res.status( 409 ).json( { message: "User already exists." } );
    }
    const user = new User( { name, age, email } );
    await user.save();
    const transporter = nodemailer.createTransport( {
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    } );
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to Our App!",
      text: `Hello ${ name },\n\nThank you for registering!`,
    };

    await transporter.sendMail( mailOptions );
    res.status( 201 ).json( { message: "User registered and email sent.", user } );
  } catch ( err )
  {
    next( err );
  }
};