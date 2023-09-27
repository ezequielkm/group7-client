import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movimentacao } from 'app/_models/movimentacao';
import { Produto } from 'app/_models/produto';

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

  produtoEnviado: null | Produto;

  mostrarModalProduto = false;

  movimentacao: Movimentacao = {
    id: 0,
    idEstoque: 1,
    tipo: 0,
    produto: '',
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

  constructor() {
    this.produtoEnviado = new Produto();
  }

  ngOnInit() {
    if (this.movimentacaoRecebida) {
      this.movimentacao = this.movimentacaoRecebida;
    }
  }

  salvarMovimentacao() {
    this.novaMovimentacao.emit(this.movimentacao);
    this.enviarMostrarModalMovimentacao.emit();
  }

  cancelarMovimentacao() {
    this.enviarMostrarModalMovimentacao.emit();
  }

  // toggle() {
  //   this.enviarMostrarModalMovimentacao.emit();
  // }

  abrirProduto() {
    this.produtoEnviado = null;
    this.mostrarModalProduto = true;
  }

  fecharProduto() {
    this.produtoEnviado = null;
    this.mostrarModalProduto = false;
  }

  receberProduto(produto: Produto) {
    alert(produto.nome);
    this.produto = produto;
    this.movimentacao.produto = produto.nome;
  }
}
