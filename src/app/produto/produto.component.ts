import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Produto } from 'app/_models/produto';
import { ProdutoService } from 'app/_services/produto.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  listaDeProdutos: Produto[];
  mostrarModalCadastrarProduto = false;

  constructor(private produtoService: ProdutoService) {
    this.listaDeProdutos = [];
  }

  ngOnInit() {
    this.buscarProdutos();
  }

  buscarProdutos() {
    this.produtoService.getAll().pipe(first()).subscribe(produto => {
      this.listaDeProdutos = produto;
    });
  }

  salvarProduto(produto: Produto) {
    this.produtoService.create(produto).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    });

    this.buscarProdutos();
  }

  excluirProduto(idParam?: number): void {
    if (!confirm("Deseja excluir o registro?")) { return; }

    if (!idParam) { return;}

    const data = { id: idParam };

    this.produtoService.delete(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => {
        console.error(e);
      }
    });

    this.buscarProdutos();
  }

  abrirModalCadastrarProduto() {
    this.mostrarModalCadastrarProduto = true;
  }

  fecharModalCadastrarProduto() {
    this.mostrarModalCadastrarProduto = false;
  }
}
