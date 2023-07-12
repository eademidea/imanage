import { Server } from '@overnightjs/core';
import { UserController } from '../controllers/UserController';
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger/swagger.json')


export class SampleServer extends Server {

    constructor() {
        super();
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