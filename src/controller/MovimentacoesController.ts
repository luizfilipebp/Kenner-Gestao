import {json, Request , Response } from "express";
import MovimentacoesService from "../service/MovimentacoesService";


class MovimentacoesController{
    // Criar Movimentação
    async create(req: Request, res: Response){
        const { produto_id } = req.body;

        const service = MovimentacoesService;              

        const result = await service.create({produto_id});

        if(result instanceof Error){
            return res.status(400).json(result.message);
        };

        return res.json(result);
    };
}

export default new MovimentacoesController();