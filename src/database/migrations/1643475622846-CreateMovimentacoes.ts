import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMovimentacoes1643475622846 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "movimentacoes",
                columns: [
                    {
                        name:"produto_id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name:"data_entrada",
                        type: "timestamp",
                        isNullable: true,
                        default: "now()"
                    },
                    {
                        name: "data_saida",
                        type: "timestamp",
                        isNullable: true,
                        default: "now()"
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("movimentacoes");
    }

}
