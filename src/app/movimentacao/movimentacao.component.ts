import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Movimentacao } from 'app/_models/movimentacao';
import { MovimentacaoService } from 'app/_services/movimentacao.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})
export class MovimentacaoComponent {

  listaDeMovimentacoes: Movimentacao[];

  mostrarModalMovimentacao = false;

  movimentacaoEnviada: null | Movimentacao;

  tiposDeMovimentacaos = [
    { desc: 'Entrada', val: 0},
    { desc: 'Saída', val: 1},
  ]

  constructor(private movimentacaoService: MovimentacaoService) {
    this.listaDeMovimentacoes = [];
    this.movimentacaoEnviada = new Movimentacao();
  }

  ngOnInit() {
    this.buscarMovimentacoes();
  }

  buscarMovimentacoes() {
    this.movimentacaoService.getAll().pipe(first()).subscribe(movimentacao => {
      this.listaDeMovimentacoes = movimentacao;
    });
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
  }

  fecharMovimentacao() {
    this.movimentacaoEnviada = null;
    this.mostrarModalMovimentacao = false;
  }

  editarMovimentacao(movimentacao: Movimentacao) {
    this.movimentacaoEnviada = movimentacao;
    this.mostrarModalMovimentacao = true;
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
