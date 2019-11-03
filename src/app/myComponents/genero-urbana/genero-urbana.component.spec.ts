import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroUrbanaComponent } from './genero-urbana.component';

describe('GeneroUrbanaComponent', () => {
  let component: GeneroUrbanaComponent;
  let fixture: ComponentFixture<GeneroUrbanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroUrbanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroUrbanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
