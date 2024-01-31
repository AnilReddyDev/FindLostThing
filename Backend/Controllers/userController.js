const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require("../Model/Usermodel");
require('dotenv').config();

const Token = require("../Model/tokenModel");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto")

const signInUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;

  if (!userName && !email && !password) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }

  const userFound = await User.findOne({ email });

  if (userFound) {
    res.status(400);
    throw new Error("User already registered");
  }

  const hasedPassword = await bcrypt.hash(password,11);



    const userdata = await User.create({
      userName,
      email,
      password:hasedPassword,
    });
  


  if (userdata) {

    const tokendata = await Token.create({
      userId:userdata._id, 
      token:crypto.randomBytes(32).toString("hex")
    });
    const url = `${process.env.BASE_URL}/${userdata._id}/verify/${tokendata.token}`
    if(url){
      await sendEmail(userdata.email,"Verify Email",url)
    }
      


    res.status(201);
    res.send("An email sent your account please verify");
  } else {
    res.status(400);
    throw new Error("User data not valid");
  }

});


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // console.log(email, password);
    
    if (!email || !password) {
      res.status(400);
      throw new Error("All Fields are Mandatory");
    }
  
    const userExist = await User.findOne({ email });
  
    if (userExist && (await bcrypt.compare(password, userExist.password))) {
      jwt.sign(
        {
          username: userExist.username,
          email: userExist.email,
          id: userExist._id,
        },
        process.env.SECRET_KEY,
        {},
        (err, token) => {
          if (err) throw err;
          res.send(token);
          res.status(200).json(userExist);
        }
      );
    } else {
      res.status(401);
      throw new Error("Email or Password not valid");
    }
  });

  
  const tokenVerification = asyncHandler(async (req,res)=>{
    const user = await User.findOne({_id:req.params.id});
    if(!user) return res.status(400).send({message:"Invalid user"})

    const token = await Token.findOne({
      userId:user._id,
      token:req.params.token})
    if(!token) return res.status(400).send({message:"Invalid token"})

    await User.updateOne({_id:user._id, verified:true});
    await token.remove()
    res.status(200).send({message:"Email verified successfully"})

    res.status(500).send({message:"internal server error"})

  })


  module.exports = {signInUser,loginUser,tokenVerification }