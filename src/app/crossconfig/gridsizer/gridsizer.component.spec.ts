import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsizerComponent } from './gridsizer.component';

describe('GridsizerComponent', () => {
  let component: GridsizerComponent;
  let fixture: ComponentFixture<GridsizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridsizerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
