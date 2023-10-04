import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movimentacao } from 'app/_models/movimentacao';
import { Produto } from 'app/_models/produto';
import { ProdutoService } from 'app/_services/produto.service';

@Component({
  selector: 'app-movimentar',
  templateUrl: './movimentar.component.html',
  styleUrls: ['./movimentar.component.css']
})
export class MovimentarComponent {
  @Input() mostrarModalMovimentacao = true;
  @Output() enviarMostrarModalMovimentacao = new EventEmitter<void>();

  @Output() novaMovimentacao = new EventEmitter<Movimentacao>();

  @Input() movimentacaoRecebida: any;

  @Input() produtoRecebido: any;

  produtoEnviado: null | Produto;

  mostrarModalProduto = false;

  listaDeProdutos: Produto[];

  movimentacao: Movimentacao = {
    id: 0,
    idEstoque: 1,
    idProduto: 0,
    tipo: 0,
    quantidade: 0,
    preco: 0,
    data: new Date()
  };

  produto: Produto = {
    id: 0,
    tipo: "",
    nome: "",
    vencimento: new Date()
  };

  tiposDeMovimentacaos = [
    { desc: 'Entrada', val: 0},
    { desc: 'Saída', val: 1},
  ]

  constructor(private produtoService: ProdutoService) {
    this.produtoEnviado = new Produto();
    this.listaDeProdutos = [];
  }

  ngOnInit() {
    if (this.movimentacaoRecebida) {
      this.movimentacao = this.movimentacaoRecebida;
    }

    if (this.produtoRecebido) {
      this.getProduto(this.produtoRecebido);
    }
  }

  getProduto(idProduto: number) {
    const data = {
      id: idProduto
    };

    this.produtoService.getProduto(data).subscribe({
      next: (produto) => this.editProduto(produto),
      error: (e) => {console.error(e), alert(e);}
    });
  }

  editProduto(data: Produto[]) {
    this.produto = data[0];
  }

  salvarMovimentacao() {
    this.movimentacao.idEstoque = 1;

    if (!this.movimentacao.idProduto) {
      this.movimentacao.idProduto = this.produto.id;
    }

    this.novaMovimentacao.emit(this.movimentacao);
    this.enviarMostrarModalMovimentacao.emit();
  }

  cancelarMovimentacao() {
    this.enviarMostrarModalMovimentacao.emit();
  }

  abrirProduto() {
    this.produtoEnviado = null;
    this.mostrarModalProduto = true;
  }

  fecharProduto() {
    this.produtoEnviado = null;
    this.mostrarModalProduto = false;
  }

  receberProduto(produto: Produto) {
    this.produto = produto;
    this.movimentacao.idProduto = produto.id;
  }
}
