import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarDocumentosComponent } from './solicitar-documentos.component';

describe('SolicitarDocumentosComponent', () => {
  let component: SolicitarDocumentosComponent;
  let fixture: ComponentFixture<SolicitarDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarDocumentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
