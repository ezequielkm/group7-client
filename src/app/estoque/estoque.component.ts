import { Component, Input } from '@angular/core';
import { Estoque } from 'app/_models/estoque';
import { Movimentacao } from 'app/_models/movimentacao';
import { EstoqueService } from 'app/_services/estoque.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent {
  @Input() estoqueAntigo: Estoque;

  movimentacao: Movimentacao;
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

  estoque?: Estoque[];

  constructor(private esoqueService: EstoqueService) {
    this.estoqueAntigo = new Estoque();
    this.movimentacao = new Movimentacao(0, 0, "", 0, 0);

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
    // this.buscarEstoqueDeMovimentacoes(this.estoqueAntigo.id);

    this.esoqueService.getAll().pipe(first()).subscribe(estoque => {
      this.estoque = estoque;
    });
  }

  ngOnChanges() {
    // this.buscarEstoqueDeMovimentacoes(this.estoqueAntigo.id);
  }

  salvarMovimentacao(){
    // if (this.utlimoIdEstoqueSelecionada != this.estoqueAntigo.id) {
    //   this.ultimoIdMovimentacao = 0;
    // }

    // this.ultimoIdMovimentacao ++;

    // this.movimentacao = this.movimentacao.inserirMovimentacao(this.tipoMovimentacao, this.produto, this.quantidade, this.preco);

    // this.listaDeMovimentacoes.push(this.movimentacao);
    // this.listaDeTodosAsMovimentacoes.push(this.movimentacao);

    // this.utlimoIdEstoqueSelecionada = this.estoqueAntigo.id;

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
