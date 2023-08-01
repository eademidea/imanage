


import { SampleServer } from './configs/ServiceConfig';
require("dotenv").config();

var server = new SampleServer();

const port: number = Number(process.env.SERVER_PORT != null ? process.env.SERVER_PORT : 3000);

server.init();
server.start(port);

