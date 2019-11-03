import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoPerfilAdminAgregarComponent } from './contenido-perfil-admin-agregar.component';

describe('ContenidoPerfilAdminAgregarComponent', () => {
  let component: ContenidoPerfilAdminAgregarComponent;
  let fixture: ComponentFixture<ContenidoPerfilAdminAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoPerfilAdminAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoPerfilAdminAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
