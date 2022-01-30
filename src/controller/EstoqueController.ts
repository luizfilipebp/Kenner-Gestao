import {json, Request , Response } from "express";
import EstoqueService from "../service/EstoqueService";

class EstoqueController{
    // Criar Estoque
    async create(req: Request, res: Response){
        const { nome } = req.body;
        const service = EstoqueService;              

        const result = await service.create({nome});
        if(result instanceof Error){
            return res.status(400).json(result.message);
        };
        return res.json(result);
    };
}

export default new EstoqueController();