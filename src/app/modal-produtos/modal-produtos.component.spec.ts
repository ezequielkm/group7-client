import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProdutosComponent } from './modal-produtos.component';

describe('ModalProdutosComponent', () => {
  let component: ModalProdutosComponent;
  let fixture: ComponentFixture<ModalProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalProdutosComponent]
    });
    fixture = TestBed.createComponent(ModalProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
