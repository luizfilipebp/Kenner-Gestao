import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm"; "typeorm";
import { v4 as uuid  } from "uuid";
import { Estoque } from "./Estoque";
import { ProdutoEstoque } from "./ProdutoEstoque";

@Entity("produtos")
export class Produto{
    @PrimaryColumn()
    id: string;

    @Column()
    name: string; 

    @Column()
    description: string;

    @OneToMany(() => ProdutoEstoque, produtoEstoque => produtoEstoque.produto)
    public produtoEstoque!: ProdutoEstoque[];  

    // Gerar ID
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}