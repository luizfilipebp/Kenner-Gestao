import {Entity, Column, PrimaryColumn, BeforeInsert, ManyToOne, OneToMany} from "typeorm";
import bcrypt from "bcryptjs";
//import { Produto_Estoque } from "./Produto_Estoque";


@Entity("usuarios")
export class Usuario {
    @Column()
    name: string;

    @PrimaryColumn()
    user_name: string;
   
    @Column()
    password:string;

    @BeforeInsert()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 10);
    }
}