import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentarComponent } from './movimentar.component';

describe('MovimentarComponent', () => {
  let component: MovimentarComponent;
  let fixture: ComponentFixture<MovimentarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovimentarComponent]
    });
    fixture = TestBed.createComponent(MovimentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
