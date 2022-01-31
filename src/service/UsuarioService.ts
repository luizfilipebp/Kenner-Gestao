import { getCustomRepository, getRepository } from "typeorm";
import { Usuario } from "../models/Usuario";

type UsuarioCreateRequest = {
    name: string;
    user_name: string
    password:string;
};

type UsuarioUpdateRequest = {
    user_name: string
    password:string;
}


class UsuarioService{
    async create({name, user_name, password}: UsuarioCreateRequest): Promise<Usuario | Error>{

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

        delete user.password;

        return user;
    }

    // Atualizar Usuario***
    async update({user_name, password}: UsuarioUpdateRequest){
        const repository = getRepository(Usuario);
        const usuario = await repository.findOne(user_name);

        if(!usuario){
            return Error("O usuário não existe!")
        }

        usuario.user_name = user_name ? user_name : usuario.user_name;
        usuario.password = password ? password : usuario.password;

        await repository.save(usuario);
        
        return usuario;
    }

    // Deletar Usuario***
    async delete(user_name: string){
        const repository = getRepository(Usuario);

        if(!await repository.findOne(user_name)){
            return new Error ("Este usuario não existe")
        }

        await repository.delete(user_name);
    }
}

export default new UsuarioService();