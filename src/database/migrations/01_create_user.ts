import { Knex } from "knex";
import { ETablesName } from "../TableNames";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable(ETablesName.user, table => {
            table.bigIncrements("id").primary().index();
            table.string("name").checkLength("<=", 150).notNullable();
            table.string("username").unique().notNullable().index()
            table.string("password").checkLength("<=", 150)
            table.dateTime("created_at").defaultTo(knex.fn.now());
            table.comment("Tabela de usuários do sistema.");

        }).then(() => {
            console.log(`# Created table ${ETablesName.user}`)
        })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(ETablesName.user).then(() => {
        console.log(`# Dropped table ${ETablesName.user}`);
    });
}
