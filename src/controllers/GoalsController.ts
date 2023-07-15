import { Controller, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller("v1/goals")
export class GoalsController {

    @Post('create')
    public createGoals(req: Request, res: Response) {
        return res.json({
            message: 'Criando  Goals',
        });
    }


    @Get('list')
    public listGoals(req: Request, res: Response) {
        console.log(req.query)
        console.log("Cheguei aqui")
        return res.json({
            message: 'listar Goals',
        });
    }

}