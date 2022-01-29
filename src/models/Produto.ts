import { Column, Entity, PrimaryColumn } from "typeorm"; "typeorm";
import { v4 as uuid  } from "uuid"; "uuid";

@Entity("produtos")
export class Produto{
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    // Gerar ID
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}