import { Controller, Get, Middleware, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import log from "jet-logger";
import { create } from '../database/providers/goals/Create';
import { ensureAuthenticated } from '../middleware/EnsureAuthenticated';
import CreateGoalsValidator from '../middleware/validations/CreateGoalsValidator';
import { getAllLinks } from '../database/providers/links/Get';
@Controller("v1/goals")
export class GoalsController {

    @Post('create')
    @Middleware([ensureAuthenticated, CreateGoalsValidator])
    public async createGoals(req: Request, res: Response) {
        try {
            const response = await create(req.body);
            if (response instanceof Error) {
                return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao cadastrar objetivo...");
            }

            return res.status(StatusCodes.CREATED).json({
                message: `Objetivo cadastrado com sucesso...  `,
                id: response
            });
        } catch (error) {
            log.err(error);
            return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao cadastrar objetivo...");
        }

    }


    @Get('list')
    @Middleware([ensureAuthenticated])
    public async listGoals(req: Request, res: Response) {
        try {
            const response = await getAllLinks(req.body.id)
            if (response instanceof Error) {
                return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao buscar objetivo...");
            } else {
                return res.status(StatusCodes.OK).json({
                    response
                })
            }
        } catch (error) {
            log.err(error);
            return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao buscar objetivo...");
        }

    }
}