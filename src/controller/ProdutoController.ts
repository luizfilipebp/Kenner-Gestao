import {json, Request , Response } from "express";
import ProdutoService from "../service/ProdutoService";


class ProdutoController{
    // Criar Produto
    async create(req: Request, res: Response){
        const { name, description } = req.body;

        const service = ProdutoService;
        
        var usuario = {userID: req.userId}.userID;
              

        const result = await service.create({name, description, usuario});

        if(result instanceof Error){
            return res.status(400).json(result.message);
        };

        return res.json(result);
    };

    // Listar Produtos
    async readAll(req: Request, res: Response){
        const service = ProdutoService;
        const produtos = await service.readAll();
        return res.json(produtos);
    }

    // Atualizar Produtos
    async update(req: Request, res: Response){
        const {id} = req.params;
        const { name, description} = req.body;
        const service = ProdutoService;

        const result = await service.update({id, name,description});
         
        if (result instanceof Error){
            return res.status(400).json(result.message);
        }

        return res.json(result);

    }

    // Deletar Produtos
    async delete(req: Request, res: Response){
        const { id } = req.params;
        const service = ProdutoService;
        
        const result = await service.delete(id);
        
        if(result instanceof Error){
            return res.status(400).json(result.message);
        }

        return res.status(204).end();
    }


};

export default new ProdutoController();