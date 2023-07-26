import { Controller, Get, Middleware, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { IncomingHttpHeaders } from 'http';
import { StatusCodes } from 'http-status-codes';
import Logger from 'jet-logger';
import { IUser } from '../database/models/User';
import { create } from "../database/providers/users/Create";
import { getByUsername } from '../database/providers/users/Get';
import CreateUserValidator from "../validations/CreateUserValidator";
import { PassowrdCrypto } from '../service/PasswordCrypto';
@Controller("v1/user")
export class UserController {

    @Get("signin")
    public async signin(req: IReqCustom<IUser, CustomHeaders>, res: Response) {

        var username: string = req.headers.username;
        var password: string = req.headers.password;

        if (username == undefined || username == null
            || password == undefined || password == null) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'Parametros informados estão incorretos',
            });
        }


        const user = await getByUsername(username);
        
        if (user != undefined) {
            var passIsCorrect = await PassowrdCrypto.verifyPassowrd(password, user.password);
            if (!passIsCorrect) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    message: 'Usuário ou senha incorreta...',
                });
            }
            return res.status(StatusCodes.OK).json({
                message: "Usuário logado com sucesso."
            });
        }
       
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: 'Usuário ou senha incorreta...',
        });
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




interface CustomHeaders {
    username: string,
    password: string;
}

interface IReqCustom<TBody, THeader> extends Request {
    body: TBody;
    headers: IncomingHttpHeaders & THeader;
}
