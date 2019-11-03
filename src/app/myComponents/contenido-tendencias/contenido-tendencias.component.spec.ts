import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoTendenciasComponent } from './contenido-tendencias.component';

describe('ContenidoTendenciasComponent', () => {
  let component: ContenidoTendenciasComponent;
  let fixture: ComponentFixture<ContenidoTendenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoTendenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoTendenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
