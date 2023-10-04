import { Component } from '@angular/core';
import { Movimentacao } from 'app/_models/movimentacao';
import { MovimentacaoService } from 'app/_services/movimentacao.service';
import { first } from 'rxjs';
import { ProdutoService } from 'app/_services/produto.service';
import { Produto } from 'app/_models/produto';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})
export class MovimentacaoComponent {

  listaDeMovimentacoes: Movimentacao[];

  mostrarModalMovimentacao = false;

  movimentacaoEnviada: null | Movimentacao;
  produtoEnviado: undefined | number;

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

  constructor(private movimentacaoService: MovimentacaoService, private produtoService: ProdutoService) {
    this.listaDeMovimentacoes = [];
    this.movimentacaoEnviada = new Movimentacao();
    this.produtoEnviado = 1
  }

  ngOnInit() {
    this.buscarMovimentacoes();
  }

  buscarMovimentacoes() {
    this.movimentacaoService.getAll().pipe(first()).subscribe(movimentacao => {
      this.listaDeMovimentacoes = movimentacao;

      this.listaDeMovimentacoes.forEach(element => {
        this.getProduto(element.idProduto, element);
      });
    });
  }

  getProduto(idProduto?: number, prod?: Movimentacao) {
    if (!prod) { return; }

    const data = {
      id: idProduto
    };

    this.produtoService.getProduto(data).subscribe({
      next: (produto) => this.editProduto(produto, prod),
      error: (e) => {console.error(e), alert(e);}
    });
  }

  editProduto(data: Produto[], prod: Movimentacao) {
    this.produto = data[0];
    prod.nomeDoProduto = data[0].nome;
  }

  salvarMovimentacao(movimentacao: Movimentacao) {
    if (movimentacao.id) {
      this.movimentacaoService.edit(movimentacao).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
    } else {
      this.movimentacaoService.create(movimentacao).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });

      this.buscarMovimentacoes();
    }
  }

  abrirMovimentacao() {
    this.movimentacaoEnviada = null;
    this.mostrarModalMovimentacao = true;
    this.produtoEnviado = 0;
  }

  fecharMovimentacao() {
    this.movimentacaoEnviada = null;
    this.mostrarModalMovimentacao = false;
    this.produtoEnviado = 0;
  }

  editarMovimentacao(movimentacao: Movimentacao) {
    this.movimentacaoEnviada = movimentacao;
    this.mostrarModalMovimentacao = true;
    this.produtoEnviado = movimentacao.idProduto;
  }

  excluirMovimentacao(idParam?: number): void {
    if (!confirm("Deseja excluir o registro?")) { return; }

    if (!idParam) { return; }

    const data = { id: idParam };

    this.movimentacaoService.delete(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => {
        console.error(e);
      }
    });

    this.buscarMovimentacoes();
  }
}
