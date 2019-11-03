import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoMiListaComponent } from './contenido-mi-lista.component';

describe('ContenidoMiListaComponent', () => {
  let component: ContenidoMiListaComponent;
  let fixture: ComponentFixture<ContenidoMiListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoMiListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoMiListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
