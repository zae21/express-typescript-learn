const jwt = require('jsonwebtoken');
const User = require("../models/user");
// const api = require('../../utility/api-helper');
const CryptoJS = require('crypto-js');
const e = require("express");

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, api.jwtSecret, {
    expiresIn: maxAge
  });
};

// controller actions
module.exports.login = async (req:Request, res:Response) => {
  const requireField = ['email','password'];
  const { email, password } = api.validate(res,requireField,req.body)
  var hash = CryptoJS.MD5(CryptoJS.enc.Utf8.parse(password));
  var md5Pwd = hash.toString(CryptoJS.enc.Hex)
  try {
    const user = await User.login(email, md5Pwd);
    if(user.id){
      const token = createToken(user.id);
      return api.success(res,{ token });
    }else{
      return api.fail(res,"Username atau password tidak sesuai");  
    }
    // res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
  } 
  catch (err) {
    return api.fail(res,err);
  }

}

module.exports.currentUser = async (req:Request, res:Response) => {
  return api.success(res,{ user: res.locals.user });
}

module.exports.logout = (req:Request, res:Response) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}