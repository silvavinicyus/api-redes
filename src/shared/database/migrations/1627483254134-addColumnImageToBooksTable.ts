import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addColumnImageToBooksTable1627483254134 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('books', new TableColumn({
            name: 'image',
            type: 'varchar',
            isNullable: true
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('books', 'image');
    }
}
