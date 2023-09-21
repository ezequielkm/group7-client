import { Component, Input } from '@angular/core';
import { Estoque } from 'app/_models/estoque';
import { EstoqueService } from 'app/_services/estoque.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent {

  estoque?: Estoque[];
  estoqueDescricao?: string;

  constructor(private estoqueService: EstoqueService) { }

  ngOnInit() {
    this.estoqueService.getAll().pipe(first()).subscribe(estoque => {
      this.estoque = estoque;
      this.estoqueDescricao = estoque[0].descricao;
    });
  }
}
