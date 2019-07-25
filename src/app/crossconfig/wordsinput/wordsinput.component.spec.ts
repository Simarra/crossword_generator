import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsinputComponent } from './wordsinput.component';

describe('WordsinputComponent', () => {
  let component: WordsinputComponent;
  let fixture: ComponentFixture<WordsinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsinputComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
