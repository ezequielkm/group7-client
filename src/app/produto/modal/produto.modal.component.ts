import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from 'app/_models/produto';

@Component({
  selector: 'app-produtoModal',
  templateUrl: './produto.modal.component.html',
  styleUrls: ['./produto.modal.component.css']
})
export class ProdutoModalComponent {
  @Input() mostrarModalProduto = true;
  @Output() novoProduto = new EventEmitter<Produto>();
  @Output() enviarMostrarModalProduto = new EventEmitter<void>();

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

  salvarProduto() {
    const data: Produto = {
      nome: this.produto.nome,
      tipo: this.produto.tipo,
      vencimento: this.produto.vencimento,
    };

    this.novoProduto.emit(this.produto);
    this.enviarMostrarModalProduto.emit();
  }

  cancelarProduto() {
    this.enviarMostrarModalProduto.emit();
  }

  toggle() {
    this.enviarMostrarModalProduto.emit();
  }
}