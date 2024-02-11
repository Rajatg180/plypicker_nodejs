const Usr = require('../models/User');
const {StatusCodes}=require('http-status-codes');
const BadRequestError= require('../errors/bad-request');
const UnauthenticatedError = require('../errors/unauthenticated');

const register = async (req,res) =>{

    const {name,email,password}=req.body;

    if(!name || !email || !password){
        throw new BadRequestError("Please provide the blank place")
    }

    const user = await Usr.create({...req.body});

    // creating the jwt
    const token = user.createJWT();

    // sending back response
    res.status(StatusCodes.CREATED).json({user :{ username :user.getName(),email:email,id:user._id},token});
}

const login = async (req,res) =>{

    const {email,password} = req.body;

    if(!email || !password){
        throw new BadRequestError("Please provide email and password ")
    }

    // comapring email and get the user 
    const user = await Usr.findOne({email});

    // if user is not present we will send costum error that 
    if(!user){
        throw new UnauthenticatedError("Please provide valid credenatils");
    }

    // if user present then only we will compare password 
    const isPasswordCorrect = await user.comparePassword(password);

    if(!isPasswordCorrect){
        throw new UnauthenticatedError("Please provide valid credenatils");
    }

    // if user is creating the jwt
    const token = user.createJWT();

    res.status(StatusCodes.OK).json({name:{name:user.getName(),id:user._id},token});
}

module.exports = {register,login};

