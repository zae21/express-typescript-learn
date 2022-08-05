const jwt = require('jsonwebtoken');
const User = require('../models/user');
const api = require('../../utility/api-helper');

const requireAuth = (req, res, next) => {
  const token = req.header('Authorization');
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, api.jwtSecret, (err, decodedToken) => {
      if (err) {
        api.error(res,err.message);
      } else {
        if(decodedToken.id){
          next();
        }else{
          api.fail(res,401,"Akses data tidak sah!");
        }
      }
    });
  } else {
    api.fail(res,403,"Akses data tidak sah!");
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.header('Authorization');
  if (token) {
    jwt.verify(token, api.jwtSecret, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        if(decodedToken.id){
          let user = await User.info(decodedToken.id);
          res.locals.user = user;
          next();
        }else{
          res.locals.user = null;
          next();
        }
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};


module.exports = { requireAuth, checkUser };