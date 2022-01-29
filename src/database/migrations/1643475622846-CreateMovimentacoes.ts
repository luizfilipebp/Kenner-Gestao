import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMovimentacoes1643475622846 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "movimentacoes",
                columns: [
                    {
                        name:"data_entrada",
                        type: "date",
                    },
                    {
                        name: "data_saida",
                        type: "date",
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("movimentacoes");
    }

}
