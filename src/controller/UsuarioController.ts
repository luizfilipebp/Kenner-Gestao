import {Request, Response} from "express";
import UsuarioService from "../service/UsuarioService";

class UsuarioController{
    // Criar Usuario
    async create(req: Request, res:Response){
        const { name, user_name, password } = req.body;

        const service = UsuarioService;
        
        const result = await service.create({name, user_name, password});

        if(result instanceof Error){
            return res.status(400).json(result.message);
        };
      return res.json(result);
    };
   
    // Atualizar Usuario***
    async update(req: Request, res: Response){
        const { user_name, password} = req.body;
        const service = UsuarioService;

        const result = await service.update({user_name, password});
         
        if (result instanceof Error){
            return res.status(400).json(result.message);
        }

        return res.json(result);

    }

    // Deletar Usuario***
    async delete(req: Request, res: Response){
        const { user_name, password} = req.body;
        const service = UsuarioService;
        
        const result = await service.delete(user_name);
        
        if(result instanceof Error){
            return res.status(400).json(result.message);
        }

        return res.status(204).end();
    }
};

export default new UsuarioController();