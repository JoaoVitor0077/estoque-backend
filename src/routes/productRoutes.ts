import express from "express";
import { listarProdutos, criarProduto, editarProduto, removerProduto } from "../controllers/productController";

const router = express.Router();

router.get("/", listarProdutos);
router.post("/", criarProduto);
router.put("/:id", editarProduto);
router.delete("/:id", removerProduto);

export default router;
