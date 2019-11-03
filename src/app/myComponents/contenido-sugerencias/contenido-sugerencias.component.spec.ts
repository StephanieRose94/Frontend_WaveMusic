import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoSugerenciasComponent } from './contenido-sugerencias.component';

describe('ContenidoSugerenciasComponent', () => {
  let component: ContenidoSugerenciasComponent;
  let fixture: ComponentFixture<ContenidoSugerenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoSugerenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoSugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
