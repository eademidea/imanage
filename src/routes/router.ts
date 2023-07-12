import { Router } from "express";
import { Controllers } from "../controllers";


const routes = Router();

routes.get("/v1/user/test", Controllers.UserController.test);


export default routes;