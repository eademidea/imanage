import { Controller, Get, Middleware, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import log from "jet-logger";
import { create } from '../database/providers/vaults/Create';
import { getAllThinking } from '../database/providers/thinking/Get';

import { ensureAuthenticated } from '../middleware/EnsureAuthenticated';
import CreateVaultValidator from '../middleware/validations/CreateVaultValidator';

@Controller("v1/vault")
export class VaultController {


    @Post('create')
    @Middleware([ensureAuthenticated, CreateVaultValidator])
    public async createVault(req: Request, res: Response) {
        try {
            const response = await create(req.body);
            if (response instanceof Error) {
                return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao cadastrar Vault...");
            }

            return res.status(StatusCodes.CREATED).json({
                message: `Vault cadastrado com sucesso...  `,
                id: response
            });
        } catch (error) {
            log.err(error);
            return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao cadastrar Vault...");
        }
    }


    @Get('list')
    @Middleware([ensureAuthenticated])
    public async listVaults(req: Request, res: Response) {
        try {
            const response = await getAllThinking(req.body.id)
            if (response instanceof Error) {
                return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao buscar Vault...");
            } else {
                return res.status(StatusCodes.OK).json({
                    response
                })
            }
        } catch (error) {
            log.err(error);
            return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao buscar Vault...");
        }
    }

}