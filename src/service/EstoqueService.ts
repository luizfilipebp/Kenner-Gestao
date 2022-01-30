import { getRepository } from "typeorm";
import { Estoque } from "../models/Estoque";

type EstoqueCreateRequest = {nome: string}

class EstoqueService{
    //criar movimentação
    async create({nome}: EstoqueCreateRequest): Promise <Estoque | Error> {
        const repository = getRepository(Estoque);
        
        if(await repository.findOne({nome})) {
            return new Error ("Estoque já cadastrado");
        }
    
        const estoque = repository.create({nome});
     
        await repository.save(estoque);
        return estoque;
    }
}
export default new EstoqueService();