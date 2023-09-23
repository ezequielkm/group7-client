import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movimentacao } from 'app/_models/movimentacao';

@Component({
  selector: 'app-movimentar',
  templateUrl: './movimentar.component.html',
  styleUrls: ['./movimentar.component.css']
})
export class MovimentarComponent {
  @Input() mostrarModalMovimentacao = true;
  @Output() enviarMostrarModalMovimentacao = new EventEmitter<void>();

  @Output() novaMovimentacao = new EventEmitter<Movimentacao>();

  movimentacao: Movimentacao = {
    id: 0,
    idEstoque: 1,
    tipo: 0,
    produto: '',
    quantidade: 0,
    preco: 0,
    data: new Date()
  };

  tiposDeMovimentacaos = [
    { desc: 'Entrada', val: 0},
    { desc: 'Saída', val: 1},
  ]

  constructor() {

  }

  salvarMovimentacao() {
    const data: Movimentacao = {
      idEstoque: this.movimentacao.idEstoque,
      tipo: this.movimentacao.tipo,
      produto: this.movimentacao.produto,
      quantidade: this.movimentacao.quantidade,
      preco: this.movimentacao.preco
    };

    this.novaMovimentacao.emit(this.movimentacao);
    this.enviarMostrarModalMovimentacao.emit();
  }

  cancelarMovimentacao() {
    this.enviarMostrarModalMovimentacao.emit();
  }

  toggle() {
    this.enviarMostrarModalMovimentacao.emit();
  }
}
