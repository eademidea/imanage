import { Controller, Get, Post } from "@overnightjs/core";
import { Request, Response } from 'express';

export const test = (req: Request, res: Response) => {
  console.log("teste")
  return res.send("ok")
}