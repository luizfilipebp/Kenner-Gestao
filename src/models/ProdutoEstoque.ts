import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { Estoque } from "./Estoque";
import { Produto } from "./Produto";

@Entity()
export class ProdutoEstoque{
    @PrimaryColumn()
    public data_entrada: Date

    @Column({nullable: true, default: null})
    public data_saida: Date

    @ManyToOne(() => Estoque, estoque => estoque.produtoEstoque)
    public estoque!: Estoque;

    @ManyToOne(() => Produto, produto => produto.produtoEstoque)
    public produto!: Produto;
}