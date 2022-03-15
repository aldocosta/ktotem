import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoServicoComponent } from './selecao-servico.component';

describe('SelecaoServicoComponent', () => {
  let component: SelecaoServicoComponent;
  let fixture: ComponentFixture<SelecaoServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecaoServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
