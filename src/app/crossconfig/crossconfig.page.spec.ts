import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossconfigPage } from './crossconfig.page';

describe('CrossconfigPage', () => {
  let component: CrossconfigPage;
  let fixture: ComponentFixture<CrossconfigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossconfigPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossconfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
