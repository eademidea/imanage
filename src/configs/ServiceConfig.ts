import { Server } from '@overnightjs/core';
import * as bodyParser from 'body-parser';
import { Application } from 'express';
import Logger from 'jet-logger';
import { UserController } from '../controllers/UserController';
import { LinksController } from '../controllers/LinksController';
import { ThinkingController } from '../controllers/ThinkingController';
import { GoalsController, goalsController } from '../controllers/GoalsController';
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger/swagger.json')

export class SampleServer extends Server {

    constructor() {
        super();
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
        this.setupControllers();
    }

    private setupControllers(): void {
        const userController = new UserController();
        const linksController = new LinksController();
        const thinkingController = new ThinkingController();
        const goalsController = new GoalsController();
        super.addControllers(
            [
                userController
                , goalsController
                , linksController
                , thinkingController
            ]
        );
    }

    public async init(): Promise<void> {
        this.setupExpress();
    }

    public getApp(): Application {
        return this.app;
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            Logger.info('Server listening on port: ' + port);
        })
    }
}