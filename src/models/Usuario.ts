import {Entity, Column, PrimaryColumn, BeforeInsert} from "typeorm";
import bcrypt from "bcryptjs";

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