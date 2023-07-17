import { Server } from '@overnightjs/core';
import { UserController } from '../controllers/UserController';
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger/swagger.json')
import * as bodyParser from 'body-parser';


export class SampleServer extends Server {

    constructor() {
        super();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
        this.setupControllers();
    }

    private setupControllers(): void {
        const userController = new UserController();
        super.addControllers(
            [userController]
        );
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            console.log('Server listening on port: ' + port);
        })
    }
}