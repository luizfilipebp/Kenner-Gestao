import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

interface TokenPayload {
   id: string;
   iat: number;
   exp; number; 
}

const authConfig = require("../config/auth");

export default function authMiddleware (req:Request, res:Response, nex:NextFunction){
    const {authorization} = req.headers;

    if(!authorization){
        return res.sendStatus(401);
    }

    const token = authorization.replace('Bearer', ' ').trim();

    try {
        const data = jwt.verify(token, authConfig.secret);
        const {id} = data as TokenPayload;

        req.userId = id;
        
        return nex();
    } catch {
        return res.sendStatus(401);
    }
}