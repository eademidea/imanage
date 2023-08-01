import { Controller, Get, Middleware, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import log from "jet-logger";
import { create } from '../database/providers/thinking/Create';
import { getAllThinking } from '../database/providers/thinking/Get';

import CreateThinkingValidator from '../middleware/validations/CreateThinkingValidator';
import { ensureAuthenticated } from '../middleware/EnsureAuthenticated';
import { IThinking } from '../database/models/Thinking';
@Controller("v1/thinking")
export class ThinkingController {


    @Post("create")
    @Middleware([ensureAuthenticated, CreateThinkingValidator])
    public async createThinking(req: Request<{}, {}, IThinking>, res: Response) {
        try {
            const response = await create(req.body);
            if (response instanceof Error) {
                return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao cadastrar Pensamento...");
            }

            return res.status(StatusCodes.CREATED).json({
                message: `Pensamento cadastrado com sucesso...  `,
                id: response
            });
        } catch (error) {
            log.err(error);
            return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao cadastrar Pensamento...");
        }

    }


    @Get("list")
    @Middleware([ensureAuthenticated])
    public async listThinking(req: Request, res: Response) {
        try {
            const response = await getAllThinking(req.body.id)
            if (response instanceof Error) {
                return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao buscar Pensamento...");
            } else {
                return res.status(StatusCodes.OK).json({
                    response
                })
            }
        } catch (error) {
            log.err(error);
            return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao buscar Pensamento...");
        }
    }

}