import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridviewerPage } from './gridviewer.page';

describe('GridviewerPage', () => {
  let component: GridviewerPage;
  let fixture: ComponentFixture<GridviewerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridviewerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridviewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
