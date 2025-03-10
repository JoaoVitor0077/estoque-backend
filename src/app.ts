import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // Permite receber JSON no corpo das requisições

app.use("/api", userRoutes); // Aqui estamos dizendo que as rotas começam com "/api"
app.use("/api/produtos", productRoutes); // Aqui estamos dizendo que as rotas começam com "/api"

app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000");
});