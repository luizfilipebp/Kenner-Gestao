import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm"; "typeorm";
import { v4 as uuid  } from "uuid";
import { Movimentacoes } from "./Movimentacoes";
import { Usuario } from "./Usuario";
 "uuid";

@Entity("produtos")
export class Produto{
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    // Relações
    @OneToOne(type => Movimentacoes, produto => Produto)
    //@JoinColumn()
    movimentacao: Movimentacoes

    @ManyToOne(type => Usuario, produtos => Produto, {eager: true})
    usuario: string


    // Gerar ID
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}