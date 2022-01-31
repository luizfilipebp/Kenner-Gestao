import { getRepository } from "typeorm";
import { Estoque } from "../models/Estoque";

type EstoqueCreateRequest = {estoque_name: string}

class EstoqueService{
    // Criar Estoque
    async create({estoque_name}: EstoqueCreateRequest): Promise <Estoque | Error> {
        const repository = getRepository(Estoque);
        
        if(await repository.findOne({estoque_name})) {
            return new Error ("Estoque já cadastrado");
        }
    
        const estoque = repository.create({estoque_name});
     
        await repository.save(estoque);
        return estoque;
    }
}
export default new EstoqueService();