import { Controller, Get, Post, Middleware } from '@overnightjs/core';
import { IUser } from '@src/database/models/User';
import { Request, Response } from 'express';
import Logger from 'jet-logger';
import * as yup from "yup"
import validation from "../validations/UserValidator"
@Controller("v1/user")
export class UserController {

    @Get('signin')
    public signin(req: Request, res: Response) {
        return res.json({
            message: 'get_called',
        });
    }


    @Post('signup')
    @Middleware([validation])
    public signup(req: Request<{}, {}, IUser>, res: Response) {
        Logger.info(req.body.password, true)
        return res.json({
            message: 'Usuário criado com sucesso...',
        });
    }


}