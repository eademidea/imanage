import { Knex } from 'knex';
import log from "jet-logger";
import { ETablesName } from '../TableNames';


export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(ETablesName.menu, table => {
      table.bigIncrements('id').primary().index();
      table.string('name').index().checkLength("<=", 50).notNullable();
      table.string('page').index().checkLength("<=", 100).notNullable();
      table.dateTime("created_at").defaultTo(knex.fn.now());
      table.comment('Tabela usada para armazenar  menus do sistema.');
    })
    .then(() => {
      log.info(`# Created table ${ETablesName.menu}`);
    });
}

export async function down(knex: Knex) {
  return knex
    .schema
    .dropTable(ETablesName.menu)
    .then(() => {
      log.info(`# Dropped table ${ETablesName.menu}`);
    });
}
