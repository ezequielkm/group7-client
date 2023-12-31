import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Produto } from 'app/_models/produto';

@Component({
  selector: 'app-produtoModal',
  templateUrl: './produto.modal.component.html',
  styleUrls: ['./produto.modal.component.css']
})
export class ProdutoModalComponent {
  @Input() mostrarModalProduto = true;
  @Output() enviarMostrarModalProduto = new EventEmitter<void>();
  @Output() novoProduto = new EventEmitter<Produto>();
  @Input() produtoRecebido: any;
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.cancelarProduto();
}
  produto: Produto = {
    nome: "",
    tipo: "",
    vencimento: new Date()
  };

  tiposDeProdutos = [
    { desc: 'Kit', val: 'kit'},
    { desc: 'Carnes', val: 'carne'},
    { desc: 'Acessórios', val: 'acessório'},
  ]

  constructor() {}
  
  ngOnInit() {
    if (this.produtoRecebido) {
      this.produto = this.produtoRecebido;
    }
  }

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
}
