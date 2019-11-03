import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroRockComponent } from './genero-rock.component';

describe('GeneroRockComponent', () => {
  let component: GeneroRockComponent;
  let fixture: ComponentFixture<GeneroRockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroRockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroRockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
