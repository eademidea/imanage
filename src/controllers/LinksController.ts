import { Controller, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller("v1/links")
export class LinksController {

    @Post('create')
    public createLink(req: Request, res: Response) {
        return res.json({
            message: 'Criando  Link',
        });
    }


    @Get('list')
    public listLinks(req: Request, res: Response) {
        console.log(req.query)
        console.log("Cheguei aqui")
        return res.json({
            message: 'listar Link',
        });
    }

}