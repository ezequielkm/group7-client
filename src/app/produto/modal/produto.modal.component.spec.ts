import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoModalComponent } from './produto.modal.component';

describe('ProdutoModalComponent', () => {
  let component: ProdutoModalComponent;
  let fixture: ComponentFixture<ProdutoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoModalComponent]
    });
    fixture = TestBed.createComponent(ProdutoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
