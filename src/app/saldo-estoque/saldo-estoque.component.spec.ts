import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoEstoqueComponent } from './saldo-estoque.component';

describe('SaldoEstoqueComponent', () => {
  let component: SaldoEstoqueComponent;
  let fixture: ComponentFixture<SaldoEstoqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaldoEstoqueComponent]
    });
    fixture = TestBed.createComponent(SaldoEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
