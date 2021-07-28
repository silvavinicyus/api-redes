import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBookTable1627436562920 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'books',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'author',
                    type: 'varchar',
                },
                {
                    name: 'gender',
                    type: 'varchar',
                },
                {
                    name: 'pages',
                    type: 'numeric'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                  },
                  {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                  },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('books');
    }
}
