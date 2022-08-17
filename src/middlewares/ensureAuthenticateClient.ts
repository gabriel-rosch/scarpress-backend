import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
interface IPayload {
    sub: string;
}

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
 const authHeader = request.headers.authorization;

 if(!authHeader) {
     return response.status(401).json({ 
         message: "Token missing"
     })
 }
 const [,token] = authHeader.split(" ");

 try {
     const {sub} = verify(token,"3718f06183493e03028c800c6c53ec14")as IPayload
     request.id_client = sub;
     return next()
 } catch (error) {
    return response.status(401).json({
        message: "Invalid Tocken"
    })
 }
}