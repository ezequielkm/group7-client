import { Component, Input } from '@angular/core';
import { Movimentacao } from 'app/_models/movimentacao';
import { MovimentacaoService } from 'app/_services/movimentacao.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})
export class MovimentacaoComponent {

  movimentacao: Movimentacao = {
    idEstoque: 1,
    tipo: 0,
    produto: '',
    quantidade: 0,
    preco: 0,
    data: new Date()
  };

  listaDeMovimentacoes: Movimentacao[];

  tiposDeMovimentacaos = [
    { desc: 'Entrada', val: 0},
    { desc: 'Saída', val: 1},
  ]

  constructor(private movimentacaoService: MovimentacaoService) {
    this.listaDeMovimentacoes = [];
  }

  ngOnInit() {
    this.buscarMovimentacoes();
  }

  salvarMovimentacao(){
    const data = {
      idEstoque: this.movimentacao.idEstoque,
      tipo: this.movimentacao.tipo,
      produto: this.movimentacao.produto,
      quantidade: this.movimentacao.quantidade,
      preco: this.movimentacao.preco,
      data: Date.now()
    };

    this.movimentacaoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });

    this.buscarMovimentacoes();
    this.limparCampos();
  }

  excluirMovimentacao() {
    //
  }

  buscarMovimentacoes() {
    this.movimentacaoService.getAll().pipe(first()).subscribe(movimentacao => {
      this.listaDeMovimentacoes = movimentacao;
    });
  }

  limparCampos() {
    this.movimentacao.produto = "";
    this.movimentacao.tipo = 0;
    this.movimentacao.quantidade = 0;
    this.movimentacao.preco = 0;
  }
}
