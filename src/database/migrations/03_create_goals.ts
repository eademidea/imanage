import { Knex } from 'knex';
import log from "jet-logger";
import { ETablesName } from '../TableNames';


export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(ETablesName.goal, table => {
      table.bigIncrements('id').primary().index();
      table.string('goal').index().checkLength("<=", 150).notNullable();
      table.dateTime("created_at").defaultTo(knex.fn.now());
      table
        .bigInteger('user_id')
        .index()
        .notNullable()
        .references('id')
        .inTable(ETablesName.user)
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');


      table.comment('Tabela usada para armazenar objetivos dos usuários no sistema.');
    })
    .then(() => {
      log.info(`# Created table ${ETablesName.goal}`);
    });
}

export async function down(knex: Knex) {
  return knex
    .schema
    .dropTable(ETablesName.goal)
    .then(() => {
      log.info(`# Dropped table ${ETablesName.goal}`);
    });
}
