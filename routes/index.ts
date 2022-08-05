import { Router, Request, Response } from "express";
const api = require("../utility/api-helper");
const controller = require('../modules/controllers/indexController');
const router = Router();

router.get("/", controller.index);

router.get("/time",(req:Request, res:Response) : void => {
    api.success(res,{
        timestamp: new Date().getTime()
    });
});

module.exports = router;