import supertest from "supertest";
import { Knex } from "../database/knex";
import { SampleServer } from "../configs/ServiceConfig"

beforeAll(() => {
    const server = new SampleServer();
    server.init();
    global.testRequest = supertest(server.getApp());
});