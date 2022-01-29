import { Router } from "express";
import UsuarioController from "./controller/UsuarioController";

//Config
const routes = Router();

//User Routes
routes.post("/user", UsuarioController.create);

//Export
export {routes};