import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from 'app/_models/produto';

@Component({
  selector: 'app-produtoModal',
  templateUrl: './produto.modal.component.html',
  styleUrls: ['./produto.modal.component.css']
})
export class ProdutoModalComponent {
  @Input() mostrarModalCadastrarProduto = true;
  @Output() salvarProduto = new EventEmitter<void>();

  @Output() novaMovimentacao = new EventEmitter<Produto>();

  produto: Produto = {
    nome: "",
    tipo: "",
    vencimento: new Date()
  };

  tiposDeProdutos = [
    { desc: 'Kit', val: 'kit'},
    { desc: 'Carnes', val: 'carne'},
    { desc: 'Acessórios', val: 'acessorio'},
  ]

  constructor() {}

  salvarMovimentacao() {
    const data: Produto = {
      nome: this.produto.nome,
      tipo: this.produto.tipo,
      vencimento: this.produto.vencimento,
    };

    this.novaMovimentacao.emit(this.produto);
    this.mostrarModalCadastrarProduto.emit();
  }

  cancelarMovimentacao() {
    this.mostrarModalCadastrarProduto.emit();
  }

  toggle() {
    this.mostrarModalCadastrarProduto.emit();
  }
}
