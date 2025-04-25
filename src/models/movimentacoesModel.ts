import { db } from "../database/connection";

export const obterProdutoPorId = async(produto_id: number) => {
  const [result]: any = await db.promise().query(
    'SELECT quantidade FROM produtos WHERE id = ?',
    [produto_id]
  );
  return result[0]; 
};

export const atualizarQtdeProduto = async(produto_id: number, novaQuantidade: number) => {
  await db.promise().query(
    'UPDATE produtos SET quantidade = ? WHERE id = ?',
    [novaQuantidade, produto_id]
  );
};

export const registrarMovimentacao = async(
  produto_id: number,
  usuario_id: number,
  tipo: string,
  quantidade: number
) => {
  await db.promise().query(
    'INSERT into movimentacoes (produto_id, usuario_id, tipo, quantidade) VALUES (?, ?, ?, ?)',
    [produto_id, usuario_id, tipo, quantidade]
  );
};

