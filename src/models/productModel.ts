import {db} from "../database/connection";
import { QueryError, RowDataPacket } from "mysql2";

// Função para criar um produto
export const createProduct = (
    nome: string,
    descricao: string,
    imagem: Buffer,
    valor: number,
    quantidade: number, 
    callback: (err: QueryError | null, result?: RowDataPacket[]) => void) => {
        const query = "INSERT INTO produtos (nome, descricao, imagem, valor, quantidade) VALUES (?,?,?,?,?)";
        db.query(query, [nome,descricao,imagem,valor,quantidade], (err, result) => {
            callback(err, result as RowDataPacket[])
        });
    }

// Função que lista todos os produtos
export const getAllProducts = (callback: (err: QueryError | null, result?: RowDataPacket[]) => void) => {
        const query = "SELECT * FROM produtos";
        db.query(query, (err, result) => {
            callback(err, result as RowDataPacket[])
        });
    };

// Função para buscar o produto por ID
export const getProductById = (
    id: number, 
    callback: (err: QueryError | null, result?: RowDataPacket[]) => void) => {
    const query = "SELECT * FROM produtos  WHERE id = ?";
    db.query(query, [id], (err, result) => {
        callback(err, result as RowDataPacket[])
    })
};

// Função para atualizar produtos
export const updateProduct = (
    nome: string,
    descricao: string,
    imagem: Buffer,
    valor: number,
    quantidade: number,
    id: number,
    callback: (err: QueryError | null, result?: RowDataPacket[]) => void
  ) => {
    const query =
      "UPDATE produtos SET nome = ?, descricao = ?, imagem = ?, valor = ?, quantidade = ? WHERE id = ?";
      
    db.query(query, [nome, descricao, imagem, valor, quantidade, id], (err, result) => {
      callback(err, result as RowDataPacket[]);
    });
  };

// Função para deletar produtos
export const deleteProduct = (
    id: number,
    callback: (err: QueryError | null, result?: RowDataPacket[]) => void) => {
        const query = "DELETE FROM produtos WHERE id = ?";
        db.query(query, [id], (err, result) => {
            callback(err, result as RowDataPacket[])
    })
};