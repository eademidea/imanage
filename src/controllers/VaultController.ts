import { Controller, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller("v1/vault")
export class VaultController {


    @Post('create')
    public createVault(req: Request, res: Response) {
        return res.json({
            message: 'Criando  vaults',
        });
    }


    @Get('list')
    public listVaults(req: Request, res: Response) {
        console.log(req.query)
        console.log("Cheguei aqui")
        return res.json({
            message: 'listar vaults',
        });
    }

}