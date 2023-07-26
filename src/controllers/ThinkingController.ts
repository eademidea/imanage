import { Controller, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller("v1/thinking")
export class ThinkingController {


    @Post("create")
    public async createThinking(req: Request, res: Response) {
        return res.json({
            message: 'Criando  Thinking',
        });
    }


    @Get("list")
    public async listThinking(req: Request, res: Response) {
        console.log("Cheguei aqui")
        return res.json({
            message: 'listar Thinking',
        });
    }

}