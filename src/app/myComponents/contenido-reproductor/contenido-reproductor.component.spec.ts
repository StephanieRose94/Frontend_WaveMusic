import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoReproductorComponent } from './contenido-reproductor.component';

describe('ContenidoReproductorComponent', () => {
  let component: ContenidoReproductorComponent;
  let fixture: ComponentFixture<ContenidoReproductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoReproductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoReproductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
