import { Column, Entity } from "typeorm";

@Entity("movimentacoes")
export class Movimentacoes{
    @Column()
    data_entrada: Date;

    @Column()
    data_saida: Date;
}