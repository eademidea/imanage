import { Controller, Get, Middleware, Post } from '@overnightjs/core';
import { IUser } from '@src/database/models/User';
import { Request, Response } from 'express';
import Logger from 'jet-logger';
import CreateUserValidator from "../validations/CreateUserValidator";
@Controller("v1/user")
export class UserController {

    @Get('signin')
    public signin(req: Request, res: Response) {
        console.log(req.headers)
        return res.json({
            message: 'get_called',
        });
    }


    @Post('signup')
    @Middleware([CreateUserValidator])
    public signup(req: Request<{}, {}, IUser>, res: Response) {
        Logger.info("Entrando no método signup...", true)
        return res.json({
            message: 'Usuário criado com sucesso...',
        });
    }


}