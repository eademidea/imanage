import supertest from "supertest";
import { SampleServer } from "../src/configs/ServiceConfig";


const server = new SampleServer();
server.init();
export const testService = supertest(server.getApp());


