import { Knex } from 'knex';
import log from "jet-logger";
import { ETablesName } from '../TableNames';


export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(ETablesName.link, table => {
      table.bigIncrements('id').primary().index();
      table.string('title').index().checkLength("<=", 50).notNullable();
      table.string('link').checkLength("<=",250).notNullable();
      table.dateTime("created_at").defaultTo(knex.fn.now());
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
      log.info(`# Created table ${ETablesName.link}`);
    });
}

export async function down(knex: Knex) {
  return knex
    .schema
    .dropTable(ETablesName.link)
    .then(() => {
      log.info(`# Dropped table ${ETablesName.link}`);
    });
}
