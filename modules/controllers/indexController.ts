import { Request, Response } from "express";
const api = require("../../utility/api-helper");

// controller actions
module.exports.index = (req:Request, res:Response) : void => {
  api.success(res,{
    apiVersion : '0.0.1'
  });
}

