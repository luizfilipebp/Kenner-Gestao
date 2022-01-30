import {MigrationInterface, QueryRunner} from "typeorm";

export class Relacoes1643502478465 implements MigrationInterface {
    name = 'Relacoes1643502478465'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produtos" ADD "usuarioUserName" character varying`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP CONSTRAINT "PK_a5d976312809192261ed96174f3"`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD CONSTRAINT "PK_a5d976312809192261ed96174f3" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP CONSTRAINT "UQ_c6933880d8176ac1543ff5a0f04"`);
        //await queryRunner.query(`ALTER TABLE "movimentacoes" ALTER COLUMN "data_entrada" SET NOT NULL`);
        //await queryRunner.query(`ALTER TABLE "movimentacoes" ALTER COLUMN "data_saida" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD CONSTRAINT "FK_439ce81fb8e4f7d5258aa3cc42c" FOREIGN KEY ("usuarioUserName") REFERENCES "usuarios"("user_name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produtos" DROP CONSTRAINT "FK_439ce81fb8e4f7d5258aa3cc42c"`);
        //await queryRunner.query(`ALTER TABLE "movimentacoes" ALTER COLUMN "data_saida" DROP NOT NULL`);
        //await queryRunner.query(`ALTER TABLE "movimentacoes" ALTER COLUMN "data_entrada" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD CONSTRAINT "UQ_c6933880d8176ac1543ff5a0f04" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP CONSTRAINT "PK_a5d976312809192261ed96174f3"`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD CONSTRAINT "PK_a5d976312809192261ed96174f3" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "usuarioUserName"`);
    }

}
