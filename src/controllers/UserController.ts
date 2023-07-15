


import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller("v1/user")
export class UserController {

    @Get('login')
    public get(req: Request, res: Response) {
        console.log(req.query)
        console.log("Cheguei aqui")
        return res.json({
            message: 'get_called',
        });
    }
}