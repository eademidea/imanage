import { Knex } from 'knex';

import { ETablesName } from '../TableNames';


export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(ETablesName.thinking, table => {
      table.bigIncrements('id').primary().index();
      table.string('title').index().checkLength("<=", 50).notNullable();
      table.string('thinking').index().checkLength("<=", 50).notNullable();
      table.dateTime("created_at").defaultTo(knex.fn.now());
      table
        .bigInteger('user_id')
        .index()
        .notNullable()
        .references('id')
        .inTable(ETablesName.user)
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');


      table.comment('Tabela usada para armazenar pensamentos dos usuários no sistema.');
    })
    .then(() => {
      console.log(`# Created table ${ETablesName.thinking}`);
    });
}

export async function down(knex: Knex) {
  return knex
    .schema
    .dropTable(ETablesName.thinking)
    .then(() => {
      console.log(`# Dropped table ${ETablesName.thinking}`);
    });
}
