import { Router } from "express";
import AuthController from "./controller/AuthController";
import MovimentacoesController from "./controller/MovimentacoesController";
import ProdutoController from "./controller/ProdutoController";
import UsuarioController from "./controller/UsuarioController";
import authMiddleware from "./middlewares/AuthMiddleware";

// Config
const routes = Router();

//Cadastrar o primeiro usuarrio
routes.post("/", UsuarioController.create)


// Login
routes.post("/login", AuthController.authenticate);

// Usuario
routes.post("/usuario", authMiddleware, UsuarioController.create);

// Produtos
routes.post("/produto", authMiddleware, ProdutoController.create);
routes.get("/produto", authMiddleware, ProdutoController.readAll)

// Movimentações
routes.post("/movimentacoes", authMiddleware, MovimentacoesController.create)


// Export
export {routes};