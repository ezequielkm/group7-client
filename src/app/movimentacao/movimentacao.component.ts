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
    id: 0,
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

  buscarMovimentacoes() {
    this.movimentacaoService.getAll().pipe(first()).subscribe(movimentacao => {
      this.listaDeMovimentacoes = movimentacao;
    });
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

  excluirMovimentacao(idParam?: number) {
    console.log("ABC 1: " + idParam);

    const data = {
      id: idParam
    };

    console.log("ABC 2: " + data);
    console.log("ABC 3: " + data.id);

    this.movimentacaoService.delete(data).subscribe({
      next: (res) => {
        console.log("ABC 4 - RES: " + res);
        console.log(res);
      },
      error: (e) => {
        console.log("ABC 4 - e: " + e);
        console.error(e);
      }
    });
  }




  // deleteAccounts(): void {
  //   if (this.deleteUsers == null) {
  //       return;
  //   }
  //   this.deleteUsers.forEach(account => {
  //     const data = {
  //       id: <Number>account.user_id
  //     };
  //   this.userService.delete(data)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //       },
  //       error: (e) => console.error(e)
  //     });
  //   });
  //   location.reload();
  // }

  limparCampos() {
    this.movimentacao.produto = "";
    this.movimentacao.tipo = 0;
    this.movimentacao.quantidade = 0;
    this.movimentacao.preco = 0;
  }
}
