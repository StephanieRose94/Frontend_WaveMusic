import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoPerfilAdminComponent } from './contenido-perfil-admin.component';

describe('ContenidoPerfilAdminComponent', () => {
  let component: ContenidoPerfilAdminComponent;
  let fixture: ComponentFixture<ContenidoPerfilAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoPerfilAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoPerfilAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
