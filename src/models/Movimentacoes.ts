import { Column, CreateDateColumn, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { Produto } from "./Produto";

@Entity("movimentacoes")
export class Movimentacoes{
    @PrimaryColumn()
    produto_id: string;

    @CreateDateColumn()
    data_entrada: Date;

    @CreateDateColumn()
    data_saida: Date;

    // Relações
    @OneToOne(type => Produto, movimentacao => Movimentacoes)
    produto: Produto

}