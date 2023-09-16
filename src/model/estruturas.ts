export class Estoque {
  id: number;
  descricao: string;

  constructor() {
    this.id = 1;
    this.descricao = "Estoque";
  }

  inserirEstoque(descricao: string): Estoque {
    const lista = this.addEstoque(new Date());
    return lista;
  }

  addEstoque(dataModificacaoEstoque: Date): Estoque {
    const lista: Estoque = new Estoque();
    return lista;
  }
}

export class Movimentacao {
  id: number;
  idEstoque: number;
  tipo: number; // 0 = entrada e 1 = saída
  produto: string;
  quantidade: number;
  preco: number;
  data: Date;

  ultimoIdMovimentacao = 0;

  constructor(id: number, tipo: number, produto: string, quantidade: number, preco: number) {
    this.id = id;
    this.idEstoque = 1;
    this.tipo = tipo;
    this.produto = produto;
    this.quantidade = quantidade;
    this.preco = preco;
    this.data = new Date();
  }

  inserirMovimentacao(tipo: number, produto: string, quantidade: number, preco: number): Movimentacao {
    this.ultimoIdMovimentacao ++;
    const lista = this.addMovimentacao(this.ultimoIdMovimentacao, tipo, produto, quantidade, preco);
    return lista;
  }

  addMovimentacao(id: number, tipo: number, produto: string, quantidade: number, preco: number): Movimentacao {
    const lista: Movimentacao = new Movimentacao(id, tipo, produto, quantidade, preco);
    this.ultimoIdMovimentacao = id;
    return lista;
  }
}

export class Produto {
  id: number;
  descricao: string;
  unidade: string;
  tipoConsumo: number; //0 = revenda e 1 = consumo interno
  quantidade: number;
  preco: number;

  constructor(id: number, descricao: string, unidade: string, tipoConsumo: number, quantidade: number, preco: number) {
    this.id = id;
    this.descricao = descricao;
    this.unidade = unidade;
    this.tipoConsumo = tipoConsumo;
    this.quantidade = quantidade;
    this.preco = preco;
  }

  inserirProduto(id: number, descricao: string, unidade: string, tipoConsumo: number, quantidade: number, preco: number): Produto {
    const produtoAux = this.addProduto(id, descricao, unidade, tipoConsumo, quantidade, preco);
    return produtoAux;
  }

  addProduto(id: number, descricao: string, unidade: string, tipoConsumo: number, quantidade: number, preco: number): Produto {
    const produtoAux: Produto = new Produto(id, descricao, unidade, tipoConsumo, quantidade, preco);
    return produtoAux;
  }
}
