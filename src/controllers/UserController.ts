


import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller("v1/user")
export class UserController {

    @Get('test')
    public get(req: Request, res: Response) {
        console.log("Cheguei aqui")
        return res.json({
            message: 'get_called',
        });
    }
}