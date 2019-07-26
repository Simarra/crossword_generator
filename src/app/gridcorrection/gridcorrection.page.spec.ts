import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridcorrectionPage } from './gridcorrection.page';

describe('GridcorrectionPage', () => {
  let component: GridcorrectionPage;
  let fixture: ComponentFixture<GridcorrectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridcorrectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridcorrectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
