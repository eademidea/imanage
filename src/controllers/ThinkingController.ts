import { Controller, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller("v1/thinking")
export class ThinkingController {


    @Post('create')
    public createThinking(req: Request, res: Response) {
        return res.json({
            message: 'Criando  Thinking',
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