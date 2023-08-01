import { Controller, Get, Middleware, Post } from '@overnightjs/core';
import { create } from '../database/providers/links/Create';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import log from "jet-logger";
import { ILink } from '../database/models/Link';
import CreateLinkValidator from '../middleware/validations/CreateLinkValidator';
import { getAllLinks } from '../database/providers/links/Get';
import { ensureAuthenticated } from '../middleware/EnsureAuthenticated';

@Controller("v1/links")
export class LinksController {

    @Post("create")
    @Middleware([ensureAuthenticated, CreateLinkValidator])
    public async newlink(req: Request<{}, {}, ILink>, res: Response) {
        try {
            const response = await create(req.body);

            if (response instanceof Error) {
                return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao criar link...");
            }

            return res.status(StatusCodes.CREATED).json({
                message: `Link criado com sucesso...  `,
                id: response
            });

        } catch (err) {
            log.err(err);
            return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao criar link...");
        }

    }


    @Get("list")
    @Middleware([ensureAuthenticated])
    public async alllink(req: Request, res: Response) {
        try {
            const response = await getAllLinks(req.body.id)
            if (response instanceof Error) {
                return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao buscar link...");
            } else {
                return res.status(StatusCodes.OK).json({
                    response
                })
            }
        } catch (err) {
            log.err(err);
            return res.status(StatusCodes.BAD_GATEWAY).json("Erro ao buscar link...");
        }
    }

}