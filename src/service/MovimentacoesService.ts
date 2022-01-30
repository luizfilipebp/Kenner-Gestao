import { getRepository } from "typeorm";
import { Movimentacoes } from "../models/Movimentacoes";
import ProdutoService from "./ProdutoService";


type MovimentacoesCreateRequest = {
    produto_id: string,
}

class MovimentacoesService{
    //criar movimentação
    async create({
        produto_id, 
    }: MovimentacoesCreateRequest): Promise <Movimentacoes| Error> {
        const repository = getRepository(Movimentacoes);
        const produtoRepo = ProdutoService;

        if( !produtoRepo.findOneById(produto_id) ){
            return new Error ("Produto não encontrado")
        };
        
        Date.now = function now(){
            return new Date().getTime();
        }

       
        
        

        const product = repository.create({
            produto_id,                  
        });

        //console.log(userId);
        await repository.save(product);
        return product;
    }
}
export default new MovimentacoesService();