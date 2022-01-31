import {  Entity,  OneToMany, PrimaryColumn } from "typeorm";
import { ProdutoEstoque } from "./ProdutoEstoque";

@Entity("estoque")
export class Estoque{
    @PrimaryColumn()
    estoque_name: string;

    @OneToMany(() => ProdutoEstoque, produtoEstoque => produtoEstoque.estoque)
    public produtoEstoque!: ProdutoEstoque[];    
}