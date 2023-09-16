export class Lista {
  id: number;
  descricao: string;
  dataModificacaoLista: Date;
  statusLista: number; //Pendente, Comprada ou Cancelada
  ultimoIdLista = 0;

  constructor(id: number, descricao: string, dataModificacaoLista: Date, statusLista: number) {
    this.id = id;
    this.descricao = descricao;
    this.dataModificacaoLista = dataModificacaoLista;
    this.statusLista = statusLista;
  }

  inserirLista(descricao: string, statusLista: number): Lista {
    this.ultimoIdLista ++;
    const listaAux = this.addLista(this.ultimoIdLista, descricao, new Date(), statusLista);
    return listaAux;
  }

  addLista(id: number, descricao: string, dataModificacaoLista: Date, statusLista: number): Lista {
    const listaAux: Lista = new Lista(id, descricao, dataModificacaoLista, statusLista);
    this.ultimoIdLista = id;
    return listaAux;
  }
}

export class Produto {
  id: number;
  idLista: number;
  nomeDoProduto: string;
  unidadeDeMedida: string;
  quantidade: number;
  statusProduto: number; //Pendente ou comprado
  lista: Lista;

  constructor(id: number, idLista: number, nomeDoProduto: string, unidadeDeMedida: string, quantidade: number, statusProduto: number) {
    this.id = id;
    this.idLista = idLista;
    this.nomeDoProduto = nomeDoProduto;
    this.unidadeDeMedida = unidadeDeMedida;
    this.quantidade = quantidade;
    this.statusProduto = statusProduto;

    this.lista = new Lista(0, "", new Date(), 0);
  }

  inserirProduto(id: number, idLista: number, nomeDoProduto: string, unidadeDeMedida: string, quantidade: number, statusProduto: number): Produto {
    const produtoAux = this.addProduto(id, idLista, nomeDoProduto, unidadeDeMedida, quantidade, statusProduto);
    return produtoAux;
  }

  addProduto(id: number, idLista: number, nomeDoProduto: string, unidadeDeMedida: string, quantidade: number, statusProduto: number): Produto {
    const produtoAux: Produto = new Produto(id, idLista, nomeDoProduto, unidadeDeMedida, quantidade, statusProduto);
    return produtoAux;
  }
}
