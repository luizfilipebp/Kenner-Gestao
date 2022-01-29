import express from "express";
import { routes } from "./routes";

//Config
const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(routes);
app.listen(port, ()=> console.log('Server is runing on port ' + port));