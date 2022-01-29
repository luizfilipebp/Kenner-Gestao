import { getRepository } from "typeorm";
import { Produto } from "../models/Produto"

type ProdutoRequest = {
    name: string;
    description: string;
};


class ProdutoService{
    async create({name, description}: ProdutoRequest): Promise<Produto | Error>{
        const repository = getRepository(Produto);

        if(await repository.findOne({name})){
            return new Error ("Produto já cadastrado")
        };

        const product = repository.create({
            name,
            description,
        });

        await repository.save(product);
        return product;
    }
}

export default new ProdutoService();