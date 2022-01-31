/**
 * Configuração para o AuthMiddleware 
 */
declare namespace Express {
    export interface Request{
        userId: string;
    }
}