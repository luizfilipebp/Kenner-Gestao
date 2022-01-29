import {Request, Response} from "express";
import { getRepository } from "typeorm";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

const authConfig = require("../config/auth");

import { Usuario } from "../models/Usuario"

class AuthController{
    async authenticate(req: Request, res: Response){
        const repo = getRepository(Usuario);
        const {user_name, password} = req.body;

        const user = await repo.findOne({where: {user_name}});

        if(!user){
            return res.sendStatus(401).statusMessage = 'Usuário não encontrado';
        }

        const isValid = await bcrypt.compare(password, user.password);

        if(!isValid){
            return res.sendStatus(401).statusMessage = 'Senha incorreta';
        }

        const token = jwt.sign({id: user.user_name}, authConfig.secret,{ expiresIn: '1d'})

        return res.json({
            user,
            token
        })


    }
}

export default new AuthController()