import {MigrationInterface, QueryRunner} from "typeorm";

export default class BdWithRelations1643586697094 implements MigrationInterface {
    name = 'BdWithRelations1643586697094'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "produtos" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_a5d976312809192261ed96174f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "produto_estoque" ("data_entrada" TIMESTAMP NOT NULL, "data_saida" TIMESTAMP, "estoqueEstoqueName" character varying, "produtoId" character varying, CONSTRAINT "PK_08c67728935582be02c85907a5c" PRIMARY KEY ("data_entrada"))`);
        await queryRunner.query(`CREATE TABLE "estoque" ("estoque_name" character varying NOT NULL, CONSTRAINT "PK_cd1eb82fe7a82676d7ec2c5a515" PRIMARY KEY ("estoque_name"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("name" character varying NOT NULL, "user_name" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_21601ca1ebbe08849039b87a8c8" PRIMARY KEY ("user_name"))`);
        await queryRunner.query(`ALTER TABLE "produto_estoque" ADD CONSTRAINT "FK_223c1abbe2259573838a858a031" FOREIGN KEY ("estoqueEstoqueName") REFERENCES "estoque"("estoque_name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "produto_estoque" ADD CONSTRAINT "FK_e8c1eb51c6de77b074a36eb2f2f" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produto_estoque" DROP CONSTRAINT "FK_e8c1eb51c6de77b074a36eb2f2f"`);
        await queryRunner.query(`ALTER TABLE "produto_estoque" DROP CONSTRAINT "FK_223c1abbe2259573838a858a031"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "estoque"`);
        await queryRunner.query(`DROP TABLE "produto_estoque"`);
        await queryRunner.query(`DROP TABLE "produtos"`);
    }

}
