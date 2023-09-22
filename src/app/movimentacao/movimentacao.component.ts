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

  // @Input() movimentacaoInput: Movimentacao;

   listaDeMovimentacoes: Movimentacao[];
  // tipoMovimentacao: number;
  // produto: string;
  // quantidade: number;
  // preco: number;
  // ultimoIdMovimentacao = 0;

  // utlimoIdEstoqueSelecionada: number;
  // mostrarEstoqueDeMovimentacoes: boolean;

  tiposDeMovimentacaos = [
    { desc: 'Entrada', val: 0},
    { desc: 'Saída', val: 1},
  ]

  // movimentacao?: Movimentacao[];

   constructor(private movimentacaoService: MovimentacaoService) {
  //   this.movimentacaoInput = new Movimentacao();


  //   this.tipoMovimentacao = 0;
  //   this.produto = "";
  //   this.quantidade = 0;
  //   this.preco = 0;

    this.listaDeMovimentacoes = [];

  
  //   this.utlimoIdEstoqueSelecionada = 0;
  //   this.mostrarEstoqueDeMovimentacoes = false;
  }

  ngOnInit() {
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
            //this.submitted = true;
          },
          error: (e) => console.error(e)
        });
    
  }

  buscarEstoqueDeMovimentacoes(idEstoque: number) {
  }

  limparCampos() {
  }
}
