import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsuario1643470677850 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuarios",
                columns: [
                    {
                        name:"name",
                        type: "varchar",
                        isNullable: false,                        
                    },
                    {
                        name: "user_name",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false,
                        isPrimary: true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false,
                    }                   
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios");
    }

}
