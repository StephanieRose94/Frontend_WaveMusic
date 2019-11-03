import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroPopComponent } from './genero-pop.component';

describe('GeneroPopComponent', () => {
  let component: GeneroPopComponent;
  let fixture: ComponentFixture<GeneroPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
