export class Movimentacao {
  id: number;
  idEstoque: number;
  tipo: number; // 0 = entrada e 1 = saída
  produto: string;
  quantidade: number;
  preco: number;
  data: Date;

  // ultimoIdMovimentacao = 0;

  constructor(id: number, tipo: number, produto: string, quantidade: number, preco: number) {
    this.id = id;
    this.idEstoque = 1;
    this.tipo = tipo;
    this.produto = produto;
    this.quantidade = quantidade;
    this.preco = preco;
    this.data = new Date();
  }

  // inserirMovimentacao(tipo: number, produto: string, quantidade: number, preco: number): Movimentacao {
  //   this.ultimoIdMovimentacao ++;
  //   const lista = this.addMovimentacao(this.ultimoIdMovimentacao, tipo, produto, quantidade, preco);
  //   return lista;
  // }

  // addMovimentacao(id: number, tipo: number, produto: string, quantidade: number, preco: number): Movimentacao {
  //   const lista: Movimentacao = new Movimentacao(id, tipo, produto, quantidade, preco);
  //   this.ultimoIdMovimentacao = id;
  //   return lista;
  // }
}
