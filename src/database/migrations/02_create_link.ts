import { Knex } from 'knex';

import { ETablesName } from '../TableNames';


export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(ETablesName.link, table => {
      table.bigIncrements('id').primary().index();
      table.string('title').index().checkLength("<=", 150).notNullable();
      table.string('link').checkLength("<=",250).notNullable();
      table.dateTime("created_at")
      table
        .bigInteger('user_id')
        .index()
        .notNullable()
        .references('id')
        .inTable(ETablesName.user)
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');


      table.comment('Tabela usada para armazenar link dos usuários no sistema.');
    })
    .then(() => {
      console.log(`# Created table ${ETablesName.link}`);
    });
}

export async function down(knex: Knex) {
  return knex
    .schema
    .dropTable(ETablesName.link)
    .then(() => {
      console.log(`# Dropped table ${ETablesName.link}`);
    });
}
