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
  @Input() movimentacaoInPut: Movimentacao;

  //movimentacao: Movimentacao;
  listaDeMovimentacoes: Movimentacao[];
  tipoMovimentacao: number;
  produto: string;
  quantidade: number;
  preco: number;

  ultimoIdMovimentacao = 0;

  listaDeTodosAsMovimentacoes: Movimentacao[];
  utlimoIdEstoqueSelecionada: number;
  mostrarEstoqueDeMovimentacoes: boolean;

  tiposDeMovimentacaos = [
    { desc: 'Entrada', val: 0},
    { desc: 'Saída', val: 1},
  ]

  movimentacao?: Movimentacao[];

  constructor(private movimentacaoService: MovimentacaoService) {
    this.movimentacaoInPut = new Movimentacao(0, 0, "", 0, 0);

    this.tipoMovimentacao = 0;
    this.produto = "";
    this.quantidade = 0;
    this.preco = 0;

    this.listaDeMovimentacoes = [];

    this.listaDeTodosAsMovimentacoes = [];
    this.utlimoIdEstoqueSelecionada = 0;
    this.mostrarEstoqueDeMovimentacoes = false;
  }

  ngOnInit() {
    // this.buscarEstoqueDeMovimentacoes(this.movimentacaoInPut.id);

    // this.movimentacaoService.getAll().pipe(map(movimentacaos => movimentacaos.map(movimentacao => movimentacao.descricao))).subscribe(movimentacaoNames => console.log(movimentacaoNames));

    this.movimentacaoService.getAll().pipe(first()).subscribe(movimentacao => {
      this.movimentacao = movimentacao;
    });
  }

  ngOnChanges() {
    // this.buscarEstoqueDeMovimentacoes(this.movimentacaoInPut.id);
  }

  salvarMovimentacao(){
    // if (this.utlimoIdEstoqueSelecionada != this.movimentacaoInPut.id) {
    //   this.ultimoIdMovimentacao = 0;
    // }

    // this.ultimoIdMovimentacao ++;

    // this.movimentacao = this.movimentacao.inserirMovimentacao(this.tipoMovimentacao, this.produto, this.quantidade, this.preco);

    // this.listaDeMovimentacoes.push(this.movimentacao);
    // this.listaDeTodosAsMovimentacoes.push(this.movimentacao);

    // this.utlimoIdEstoqueSelecionada = this.movimentacaoInPut.id;

    // this.limparCampos();
  }

  buscarEstoqueDeMovimentacoes(idEstoque: number) {
    // this.listaDeMovimentacoes = this.listaDeTodosAsMovimentacoes.filter(x => x.idEstoque === idEstoque);
  }

  limparCampos() {
    // this.tipoMovimentacao = 0;
    // this.produto = "";
    // this.quantidade = 0;
    // this.preco = 0;
  }
}
