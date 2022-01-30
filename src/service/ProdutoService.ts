import { getRepository } from "typeorm";
import { Produto } from "../models/Produto"

type ProdutoCreateRequest = {
    name: string;
    description: string;
    usuario: string
};

type ProdutoUpdateRequest ={
    id: string;
    name: string;
    description: string;
}


class ProdutoService{
    // Criar Produto
    async create({name, description, usuario}: ProdutoCreateRequest): Promise<Produto | Error>{
        const repository = getRepository(Produto);
        

        if(await repository.findOne({name})){
            return new Error ("Produto já cadastrado")
        };


        const product = repository.create({
            name,
            description, 
            usuario
                     
        });

        //console.log(userId);
        await repository.save(product);
        return product;
    }

    // Listar Produto
    async readAll(){
        const repository = getRepository(Produto);
        return await repository.find();
    }

    // Atualizar Produto
    async update({id, name, description}: ProdutoUpdateRequest){
        const repository = getRepository(Produto);
        const produtos = await repository.findOne(id);

        if(!produtos){
            return Error("O produto não existe!")
        }

        produtos.name = name ? name : produtos.name;
        produtos.description = description ? description: produtos.description;

        await repository.save(produtos);

        return produtos;
    }

    // Deletar Produto
    async delete(id: string){
        const repository = getRepository(Produto);

        if(!await repository.findOne(id)){
            return new Error ("Este produto não existe")
        }

        await repository.delete(id);
    }
    // encontara um
    async findOneById(id){
        const repository = getRepository(Produto); 
        return repository.findOne(id)
    
    }

}

export default new ProdutoService();