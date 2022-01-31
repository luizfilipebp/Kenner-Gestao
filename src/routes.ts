/**
 * PARA CADASTRAR O PRIMEIRO USUARIO DO BANCO DE DADOS,
 * RETIRE O COMENTÁRIO DA LINHA 17 E UTILIZE A ROTA "/"
 */

import { Router } from "express";
import AuthController from "./controller/AuthController";
import EstoqueController from "./controller/EstoqueController";
import ProdutoController from "./controller/ProdutoController";
import ProdutoEstoqueController from "./controller/ProdutoEstoqueController";
import UsuarioController from "./controller/UsuarioController";
import authMiddleware from "./middlewares/AuthMiddleware";

// Config
const routes = Router();

routes.post("/", UsuarioController.create)


// Rota para fazer Login
routes.post("/login", AuthController.authenticate);

// Rota para cadastrar um usuário
routes.post("/usuario", authMiddleware, UsuarioController.create);

// Rota para cadastrar um estoque
routes.post("/estoque", authMiddleware, EstoqueController.create);

// Rota para cadastrar um produto
routes.post("/produto", authMiddleware, ProdutoController.create);

// Rota para listar todos os produtos cadastrados
routes.get("/produto", authMiddleware, ProdutoController.readAll)

// Rota para registrar a entrada de produtos em um estoque
routes.post("/estoque/entrada", authMiddleware, ProdutoEstoqueController.createEntrance);

// Rota para registrar a saída de produtos em um estoque
routes.post("/estoque/saida", authMiddleware, ProdutoEstoqueController.createExit);

// Rota para visualizar as movimentações realizadas.
routes.get("/estoque", authMiddleware, ProdutoEstoqueController.readAll);



// Export
export {routes};