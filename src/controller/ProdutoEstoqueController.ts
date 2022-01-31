import { Request, Response } from "express-serve-static-core";
import {} from "typeorm"
import ProdutoEstoqueService from "../service/ProdutoEstoqueService";


class ProdutoEstoqueController{
    // Requisição para registrar a ENTRADA
    async createEntrance(req: Request, res: Response){
        const {estoque_name, produto_id} = req.body;
        const service = ProdutoEstoqueService;

        const result = await service.createEntrance({estoque_name,produto_id});
        if(result instanceof Error){
            return res.status(400).json(result.message);
        }

        return res.json(result);
    }

    // Requisição para registrar a SAIDA
    async createExit(req: Request, res: Response){
        const {data_entrada} = req.body;
        const service = ProdutoEstoqueService;

        const result = await service.createExit({data_entrada});
        if(result instanceof Error){
            return res.status(400).json(result.message);
        }

        return res.json(result);
    }

    // Listar Produtos
    async readAll(req: Request, res: Response){
        const service = ProdutoEstoqueService;
        const produtos = await service.readAll();
        return res.json(produtos);
    }
}

export default new ProdutoEstoqueController();