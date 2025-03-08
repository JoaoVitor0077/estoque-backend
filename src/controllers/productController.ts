import { Request, Response } from "express";
import { db } from "../database/connection";

// Função para listar todos os produtos
export const listarProdutos = (req: Request, res: Response) => {
  db.query("SELECT * FROM produtos", (err, result) => {
    if (err) return res.status(500).send("Erro no servidor.");
    return res.status(200).json(result);
  });
};

// Função para criar um novo produto
export const criarProduto = (req: Request, res: Response) => {
  const { nome, descricao, valor, quantidade, imagem } = req.body;

  db.query(
    "INSERT INTO produtos (nome, descricao, valor, quantidade, imagem) VALUES (?, ?, ?, ?, ?)",
    [nome, descricao, valor, quantidade, imagem],
    (err) => {
      if (err) return res.status(500).send("Erro ao criar produto.");
      return res.status(201).send("Produto criado com sucesso.");
    }
  );
};

// Função para editar um produto
export const editarProduto = (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, descricao, valor, quantidade, imagem } = req.body;

  db.query(
    "UPDATE produtos SET nome = ?, descricao = ?, valor = ?, quantidade = ?, imagem = ? WHERE id = ?",
    [nome, descricao, valor, quantidade, imagem, id],
    (err) => {
      if (err) return res.status(500).send("Erro ao editar produto.");
      return res.status(200).send("Produto editado com sucesso.");
    }
  );
};

// Função para remover um produto
export const removerProduto = (req: Request, res: Response) => {
  const { id } = req.params;

  db.query("DELETE FROM produtos WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).send("Erro ao remover produto.");
    return res.status(200).send("Produto removido com sucesso.");
  });
};
