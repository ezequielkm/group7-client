export class Movimentacao {
  id?: number;
  idEstoque?: number;
  tipo: number; // 0 = entrada e 1 = saída
  produto?: string;
  quantidade?: number;
  preco?: number;
  data?: Date;

  constructor() { 
    this.tipo = 0;
  }
}
