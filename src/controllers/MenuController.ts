import { Controller, Get, Middleware, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import log from "jet-logger";
import { create } from '../database/providers/menu/Create';
import { getAllMenu } from '../database/providers/menu/Get';
import { ensureAuthenticated } from '../middleware/EnsureAuthenticated';
import CreateMenuValidator from '../middleware/validations/CreateMenuValidator';

@Controller("v1/menu")
export class MenuController {

    @Post('create')
    @Middleware([ensureAuthenticated, CreateMenuValidator])
    public async createMenu(req: Request, res: Response) {
        try {
            const response = await create(req.body);

            if (response instanceof Error) {
                return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao criar menu...");
            }

            return res.status(StatusCodes.CREATED).json({
                message: `menu criado com sucesso...  `,
                id: response
            });

        } catch (err) {
            log.err(err);
            return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao criar menu...");
        }
    }


    @Get('list')
    @Middleware([ensureAuthenticated])
    public async listMenu(req: Request, res: Response) {
        try {
            const response = await getAllMenu()
            if (response instanceof Error) {
                return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao buscar menu...");
            } else {
                return res.status(StatusCodes.OK).json({
                    response
                })
            }
        } catch (err) {
            log.err(err);
            return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao buscar menu...");
        }
    }

}