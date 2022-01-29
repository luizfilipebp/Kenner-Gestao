import {Request, Response} from "express";
import ProdutoService from "../service/ProdutoService";


class ProdutoController{
    async create(req: Request, res:Response){
        const { name, description } = req.body;

        const service = ProdutoService;

        const result = await service.create({name, description});

        if(result instanceof Error){
            return res.status(400).json(result.message);
        };

        return res.json(result);
    };
};

export default new ProdutoController();