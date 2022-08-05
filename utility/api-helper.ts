import { Response } from "express";

module.exports = {
    jwtSecret:'0FF80641C6E27CA8AA561050DF3CA87053E8A7B390D731FE94FFB8B4D5FAF47B',
    success : (resp:Response, data:any[] = []) => {
      let send = {
        status : 200,
        response: {
          message:'success',
          data
        }
      }
      resp.status(send.status).json(send)
    },
    fail:(resp:Response, status:number = 400, message:string = "Permintaan tidak sesuai!", data:any[] = []) => {
      let send = {
        status : status,
        response: {
          message,
          data
        }
      }
      resp.status(status).json(send)
    },
    error:(resp:Response, message:string = "Permintaan tidak dapat diproses. Silahkan coba lagi beberapa waktu!", data:any[] = []) => {
      let send = {
        status : 500,
        response: {
          message,
          data
        }
      }
      resp.status(send.status).json(send)
    },
    validate:(resp:Response, required:any, input:any) => {
      let send = {
        status : 401,
        response: {
          message : "Input tidak sesuai",
          data : input
        }
      }
      if(input){
        return input;
      }else{
        return resp.status(401).json(send)
      }
    }
  }