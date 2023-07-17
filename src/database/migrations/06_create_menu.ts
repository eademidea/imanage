import { Knex } from 'knex';

import { ETablesName } from '../TableNames';


export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(ETablesName.menu, table => {
      table.bigIncrements('id').primary().index();
      table.string('name').index().checkLength("<=", 50).notNullable();
      table.string('page').index().checkLength("<=", 100).notNullable();
      table.dateTime("created_at")
      table.comment('Tabela usada para armazenar  menus do sistema.');
    })
    .then(() => {
      console.log(`# Created table ${ETablesName.menu}`);
    });
}

export async function down(knex: Knex) {
  return knex
    .schema
    .dropTable(ETablesName.menu)
    .then(() => {
      console.log(`# Dropped table ${ETablesName.menu}`);
    });
}
