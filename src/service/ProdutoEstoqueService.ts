import { getRepository, IsNull } from "typeorm";
import { Estoque } from "../models/Estoque";
import { Produto } from "../models/Produto";
import { ProdutoEstoque } from "../models/ProdutoEstoque";

type ProdutoEstoqueCreateRequest = {
    estoque_name: string,
    produto_id: string
}

type ProdutoEstoqueExitRequest ={
    data_entrada: Date;
}

class ProdutoEstoqueService{
    // Criar Entrdada de um Produto no estoque
    async createEntrance({estoque_name, produto_id
    }: ProdutoEstoqueCreateRequest): Promise <ProdutoEstoque | Error> {
        const repository = getRepository(ProdutoEstoque);
        const repoEstoque = getRepository(Estoque);
        const repoPoduto = getRepository(Produto);

        const data_entrada = new Date();

        const estoque = await repoEstoque.findOne({estoque_name})
        if (!estoque) {
            return new Error ("Estoque não cadastrado");
        }

        const produto = await repoPoduto.findOne({id: produto_id});
        
        if(!produto){
            return new Error ("Produto não cadastrado");
        }
        
        const nProdutoEstoque = new ProdutoEstoque();
        nProdutoEstoque.data_entrada = data_entrada;
        nProdutoEstoque.estoque = estoque;
        nProdutoEstoque.produto = produto;

        const produtoEstoque = repository.create(nProdutoEstoque);
     
        await repository.save(nProdutoEstoque);
        return produtoEstoque;
    }

    // Cria a saida de um produto em um estoque
    async createExit({data_entrada
    }:ProdutoEstoqueExitRequest): Promise <ProdutoEstoque | Error> {
        const repo = getRepository(ProdutoEstoque);

        const result = await repo.findOne({data_entrada})

        if(!result){
            return new Error ("Este produto não deu entrada");
        }

        if(result.data_saida !== null){
            return new Error ("Este produto já saiu");
        }

        result.data_saida = new Date();

        await repo.save(result);
        return result;
    }

    // Listagem das movimentações realizadas
    async readAll(){
        const repository = getRepository(ProdutoEstoque);
        return await repository.find();
    }


}
export default new ProdutoEstoqueService();