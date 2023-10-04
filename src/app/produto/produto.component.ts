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
  produtoEnviado: null | Produto;
  mostrarModalCadastrarProduto = false;

  constructor(private produtoService: ProdutoService) {
    this.listaDeProdutos = [];
    this.produtoEnviado = new Produto();
  }

  ngOnInit() {
    this.buscarProdutos();
  }

  buscarProdutos() {
    this.produtoService.getAll().pipe(first()).subscribe(produto => {
      this.listaDeProdutos = produto;
    });
  }

  async salvarProduto(produto: Produto) {
    if(produto.id)
    {
      this.produtoService.update(produto).subscribe({
        next: (res) => this.buscarProdutos(),
        error: (e) => this.buscarProdutos()
      });
    }
    else
    {
      this.produtoService.create(produto).subscribe({
        next: (res) => this.buscarProdutos(),
        error: (e) => this.buscarProdutos()
      });
    }
  }

  editarProduto(produto: Produto) {
    this.produtoEnviado = produto;
    this.mostrarModalCadastrarProduto = true;
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
    this.produtoEnviado = null;
    this.mostrarModalCadastrarProduto = true;
  }

  fecharModalCadastrarProduto() {
    this.produtoEnviado = null;
    this.mostrarModalCadastrarProduto = false;
  }
}
