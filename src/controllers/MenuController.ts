import { Controller, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller("v1/menu")
export class MenuController {

    @Post('create')
    public createMenu(req: Request, res: Response) {
        return res.json({
            message: 'Criando  Menu',
        });
    }


    @Get('list')
    public listThinking(req: Request, res: Response) {
        console.log(req.query)
        console.log("Cheguei aqui")
        return res.json({
            message: 'listar Thinking',
        });
    }

}