import { Controller, Get, Middleware, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { ILink } from '../database/models/Link';
import CreateLinkValidator from '../validations/CreateLinkValidator';
import Logger from "jet-logger";

@Controller("v1/links")
export class LinksController {

    @Post("create")
    @Middleware([CreateLinkValidator])
    public newlink(req: Request<{}, {}, ILink>, res: Response) {
        Logger.info("Entrando no método de criação de link...")

        console.log(req.body)


        return res.json({
            message: 'Criando  Link',
        });
    }


    @Get("list")
    public alllink(req: Request, res: Response) {
        console.log(req.query)
        console.log("Cheguei aqui")
        return res.json({
            message: 'listar Link',
        });
    }

}