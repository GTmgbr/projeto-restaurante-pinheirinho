import "reflect-metadata";
import express, { Express } from "express";
import cors from "cors";
import clienteRouters from "./WebUI/routers/clienteRouters";
import AppDataSource from "./infra/orm/config";
import pedidoRouters from "./WebUI/routers/pedidoRouters";

const app: Express = express();
app.use(cors());
app.use(express.json());

app.use("/api", clienteRouters);
app.use("/api", pedidoRouters);

app.listen(8080, () => {
  console.log("Servidor Ouvindo");
});

//testConnection();

AppDataSource.initialize()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");

    app.listen(5432, () => {
      console.log("Servidor rodando na porta 5432")
    });
  })
  .catch(e => {
    console.error(`Erro ao conectar no banco: ${e}`);
  });
