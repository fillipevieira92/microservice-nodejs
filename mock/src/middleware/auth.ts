import { NextFunction, Request, Response } from "express";

export async function is_authenticated(request:Request, response:Response, next:NextFunction){

  const token = request.headers.authorization

  if (!token){
    return response.status(401).send();
  }

  const [_, auth] = token.split(' ')

  if (auth == "GPTW"){
    return next();
  }

  return response.status(401).send()
}
