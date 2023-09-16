import { Component, Input } from '@angular/core';
import { Lista, Produto } from 'model/estruturas';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent {
  @Input() lista: Lista;

  produto: Produto;
  idLista: number;
  listaDeProdutos: Produto[];
  nomeDoProduto: string;
  unidadeDeMedida: string;
  quantidade: number;
  statusProduto: number;
  ultimoIdProduto = 0;

  listaDeTodosOsProdutos: Produto[];
  utlimoIdListaSelecionada: number;
  mostrarListaDeProdutos: boolean;

  situacoesLista = [
    { desc: 'Pendente', val: 0},
    { desc: 'Comprada', val: 1},
    { desc: 'Cancelada', val: 2}
  ]

  situacoesProduto = [
    { desc: 'Pendente', val: 0},
    { desc: 'Comprado', val: 1},
  ]

  constructor() {
    this.lista = new Lista(0, "", new Date(), 0);

    this.nomeDoProduto = "";
    this.idLista = 0;
    this.unidadeDeMedida = "";
    this.quantidade = 0;
    this.listaDeProdutos = [];
    this.statusProduto = 0;
    this.produto = new Produto(0, 0, "", "", 0, 0);

    this.listaDeTodosOsProdutos = [];
    this.utlimoIdListaSelecionada = 0;
    this.mostrarListaDeProdutos = false;
  }

  ngOnInit() {
    this.buscarListaDeProdutos(this.lista.id);
    this.mostrarListaDeProdutos = true;
  }

  ngOnChanges() {
    this.buscarListaDeProdutos(this.lista.id);
  }

  salvarProduto(){
    if (this.utlimoIdListaSelecionada != this.lista.id) {
      this.ultimoIdProduto = 0;
    }

    this.ultimoIdProduto ++;

    this.produto = this.produto.inserirProduto(this.ultimoIdProduto, this.lista.id, this.nomeDoProduto, this.unidadeDeMedida, this.quantidade, this.statusProduto);

    this.listaDeProdutos.push(this.produto);
    this.listaDeTodosOsProdutos.push(this.produto);

    this.utlimoIdListaSelecionada = this.lista.id;

    this.limparCampos();
  }

  buscarListaDeProdutos(idLista: number) {
    this.listaDeProdutos = this.listaDeTodosOsProdutos.filter(x => x.idLista === idLista);
  }

  limparCampos() {
    this.nomeDoProduto = "";
    this.unidadeDeMedida = "";
    this.quantidade = 0;
    this.statusProduto = 0;
  }
}
