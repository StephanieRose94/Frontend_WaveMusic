import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroJazzybluesComponent } from './genero-jazzyblues.component';

describe('GeneroJazzybluesComponent', () => {
  let component: GeneroJazzybluesComponent;
  let fixture: ComponentFixture<GeneroJazzybluesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroJazzybluesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroJazzybluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
