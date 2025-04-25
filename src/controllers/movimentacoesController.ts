/*import { Request, Response } from 'express';
import { obterProdutoPorId, atualizarQtdeProduto, registrarMovimentacao as registrarMovimentacaoNoBanco  } from '../models/movimentacoesModel';

export const registrarMovimentacao = async (req: Request, res: Response) => {
  const { produto_id, usuario_id, tipo, quantidade} = req.body;
  if(!produto_id || !usuario_id || !tipo || !quantidade) {
    return res.status(400).json({ menssagem: 'Todos os campos são obrigatórios!' });
  }

  try {
    const produto = await obterProdutoPorId(produto_id)

    if (!produto) {
      return res.status(404).json({ mensagem: 'Produto não encontrado!' });
    }

    let novaQuantidade = produto.quantidade;

    if (tipo === 'entrada') {
      novaQuantidade += quantidade;
    }
    else if (tipo === 'saida') {
      if (quantidade > novaQuantidade) {
        return res.status(400).json({ mensagem: 'Quantidade insuficiente no estoque' });
      }
      novaQuantidade -= quantidade;
    }

    await atualizarQtdeProduto(produto_id, novaQuantidade);
    await registrarMovimentacaoNoBanco(produto_id, usuario_id, tipo, quantidade);

    res.status(201).json({ mensagem: 'Erro interno no servidor' })
  }
};
*/


