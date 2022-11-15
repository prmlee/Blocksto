import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserTable1668433469642 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS users (
      id char(36) DEFAULT (uuid()),
      firstname varchar(50) NOT NULL,
      lastname varchar(50) NOT NULL,
      particular tinyint(4) NOT NULL DEFAULT 0,
      professional tinyint(4) NOT NULL DEFAULT 0,
      buildingType int(11) NOT NULL DEFAULT 1,
      companyName varchar(100) NOT NULL,
      sirenNumber varchar(255) NOT NULL,
      address varchar(300) NOT NULL,
      email varchar(100) NOT NULL,
      blockstoId varchar(50) NOT NULL,
      blockstoPassword varchar(50) NOT NULL,
      avatar varchar(300) NOT NULL,
      PRIMARY KEY (id),
      UNIQUE KEY IDX_97672ac88f789774dd47f7c8be (email),
      UNIQUE KEY IDX_e48300563cb5e3c5ce055f7d75 (blockstoId)
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS users`);
  }
}
