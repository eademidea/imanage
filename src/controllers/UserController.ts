import { Controller, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller("v1/user")
export class UserController {

    @Get('signin')
    public signin(req: Request, res: Response) {
        console.log(req.query)
        console.log("Cheguei aqui")
        return res.json({
            message: 'get_called',
        });
    }


    @Post('signup')
    public signup(req: Request, res: Response) {
        console.log(req.query)
        console.log("Cheguei aqui")
        return res.json({
            message: 'Usuário criado com sucesso...',
        });
    }
}