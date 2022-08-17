"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _jsonwebtoken = require('jsonwebtoken');




 async function ensureAuthenticateClient(request, response, next) {
 const authHeader = request.headers.authorization;

 if(!authHeader) {
     return response.status(401).json({ 
         message: "Token missing"
     })
 }
 const [,token] = authHeader.split(" ");

 try {
     const {sub} = _jsonwebtoken.verify.call(void 0, token,"3718f06183493e03028c800c6c53ec14")
     request.id_client = sub;
     return next()
 } catch (error) {
    return response.status(401).json({
        message: "Invalid Tocken"
    })
 }
} exports.ensureAuthenticateClient = ensureAuthenticateClient;