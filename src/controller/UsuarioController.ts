import {Request, Response} from "express";
import UsuarioService  from "../service/UsuarioService";

class UsuarioController{
    async create(req: Request, res:Response){
        const { name, user_name, password } = req.body;

        const service = UsuarioService;

        const result = await service.create({name, user_name, password});

        if(result instanceof Error){
            return res.status(400).json(result.message);
        };

        return res.json(result);
    };
};

export default new UsuarioController();