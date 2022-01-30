import {Entity, Column, PrimaryColumn, BeforeInsert, ManyToOne, OneToMany} from "typeorm";
import bcrypt from "bcryptjs";
import { Produto } from "./Produto";

@Entity("usuarios")
export class Usuario {
    @Column()
    name: string;

    @PrimaryColumn()
    user_name: string;

    @Column()
    password:string;

    // Relações
    @OneToMany(type => Produto, usuario => Usuario)
    produtos: Produto[];

    @BeforeInsert()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 10);
    }
}