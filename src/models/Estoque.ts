import { Column, CreateDateColumn, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid  } from "uuid";

@Entity("estoque")
export class Estoque{
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    // Gerar ID
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}