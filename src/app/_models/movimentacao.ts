export class Movimentacao {
  id?: number;
  idEstoque?: number;
  idProduto?: number;
  nomeDoProduto?: string;
  tipo: number; // 0 = entrada e 1 = saída
  quantidade?: number;
  preco?: number;
  data?: Date;

  constructor() {
    this.tipo = 0;
  }
}
