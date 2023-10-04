import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Produto } from 'app/_models/produto';
import { ProdutoService } from 'app/_services/produto.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-modal-produtos',
  templateUrl: './modal-produtos.component.html',
  styleUrls: ['./modal-produtos.component.css']
})
export class ModalProdutosComponent {

  @Input() mostrarModalProduto = true;

  @Output() novoProduto = new EventEmitter<Produto>();

  @Output() enviarMostrarModalProduto = new EventEmitter<void>();

  @Input() produtoRecebido: any;

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.cancelarProduto();
}

  listaDeProdutos: Produto[];

  produtoEnviada: null | Produto;

  produto: Produto = {
    id: 0,
    tipo: "",
    nome: "",
    vencimento: new Date()
  };

  constructor(private produtoService: ProdutoService) {
    this.listaDeProdutos = [];
    this.produtoEnviada = new Produto();
  }

  ngOnInit() {
    this.buscarProdutos();

    if (this.produtoRecebido) {
      this.produto = this.produtoRecebido;
    }
  }

  buscarProdutos() {
    this.produtoService.getAll().pipe(first()).subscribe(produto => {
      this.listaDeProdutos = produto;
    });
  }

  salvarProduto(produto: Produto) {
    this.novoProduto.emit(produto);
    this.enviarMostrarModalProduto.emit();
  }

  cancelarProduto() {
    this.enviarMostrarModalProduto.emit();
  }
}
