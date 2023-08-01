import supertest from "supertest";
import { SampleServer } from "../src/configs/ServiceConfig";
import { Knex } from "../src/database/knex";


beforeAll(async () => {
    await Knex.migrate.latest();
    // await Knex.seed.run();
});

afterAll(async () => {
    await Knex.destroy();
});

const server = new SampleServer();
server.init();


export const testService = supertest(server.getApp());


