import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroLatinoComponent } from './genero-latino.component';

describe('GeneroLatinoComponent', () => {
  let component: GeneroLatinoComponent;
  let fixture: ComponentFixture<GeneroLatinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroLatinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroLatinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
