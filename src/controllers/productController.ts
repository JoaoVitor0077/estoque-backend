import { Request, Response } from "express";
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "../models/productModel";

// Criar produto
export const addProduct = (req: Request, res: Response) => {
  const { nome, descricao, valor, quantidade } = req.body;
  const imagem = req.file?.buffer ?? Buffer.alloc(0); // Assumindo que você usará multer para upload de imagens

  createProduct(
    nome, 
    descricao, 
    imagem, 
    valor, 
    quantidade, 
    (err: any, results: any) => {
    if (err) return res.status(500).json({ message: "Erro ao criar produto." });
    return res.status(201).json({ message: "Produto criado com sucesso!" });
  });
};

// Listar todos os produtos
export const getProducts = (req: Request, res: Response) => {
  getAllProducts((err: any, results: any) => {
    if (err) return res.status(500).json({ message: "Erro ao obter produtos." });
    return res.status(200).json(results);
  });
};

// Buscar produto por ID
export const getProduct = (req: Request, res: Response) => {
  const id  = parseInt(req.params.id, 10);
  
  getProductById(id, (err: any, results: any) => {
    if (err || results.length === 0) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }
    return res.status(200).json(results[0]);
  });
};

// Atualizar produto
export const updateProductDetails = (req: Request, res: Response) => {
  const id  = parseInt(req.params.id, 10);
  const { nome, descricao, valor, quantidade } = req.body;
  const imagem = req.file?.buffer ?? Buffer.alloc(0);

  updateProduct(
    id, 
    nome, 
    descricao, 
    imagem, 
    valor, 
    quantidade, 
    (err: any, results: any) => {
    if (err) return res.status(500).json({ message: "Erro ao atualizar produto." });
    return res.status(200).json({ message: "Produto atualizado com sucesso!" });
  });
};

// Deletar produto
export const removeProduct = (req: Request, res: Response) => {
  const id  = parseInt(req.params.id, 10);

  deleteProduct(id, (err: any, results: any) => {
    if (err) return res.status(500).json({ message: "Erro ao deletar produto." });
    return res.status(200).json({ message: "Produto deletado com sucesso!" });
  });
};
