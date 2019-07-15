import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordconfigComponent } from './wordconfig.component';

describe('WordconfigComponent', () => {
  let component: WordconfigComponent;
  let fixture: ComponentFixture<WordconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordconfigComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
