import { Controller, Get, Middleware, Post } from '@overnightjs/core';
import { IUser } from '@src/database/models/User';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Logger from 'jet-logger';
import { create } from "../database/providers/users/Create";
import CreateUserValidator from "../validations/CreateUserValidator";
@Controller("v1/user")
export class UserController {

    @Get("signin")
    public signin(req: Request, res: Response) {
        console.log(req.headers)
        return res.json({
            message: 'get_called',
        });
    }

    @Get()
    public test () {
        console.log("Passou")
    }

    @Post("signup")
    @Middleware([CreateUserValidator])
    public async signup(req: Request<{}, {}, IUser>, res: Response) {
        Logger.info("Entrando no método signup...", true)
        var response = await create(req.body);
        console.log(response)
        if (response instanceof Error) {
            return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao criar usuario...");
        }
        return res.json({
            message: `Usuário criado com sucesso...  `,
            id: response
        });
    }


}