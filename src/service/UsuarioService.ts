import { getRepository } from "typeorm";
import { Usuario } from "../models/Usuario";

type UsuarioRequest = {
    name: string;
    user_name: string
    password:string;
};


class UsuarioService{
    async create({name, user_name, password}: UsuarioRequest): Promise<Usuario | Error>{
        const repository = getRepository(Usuario);

        if(await repository.findOne({user_name})){
            return new Error ("Usuário já cadastrado")
        };

        const user = repository.create({
            name,
            user_name,
            password,
        });

        await repository.save(user);
        user.password = undefined;

        return user;
    }
}

export default new UsuarioService();