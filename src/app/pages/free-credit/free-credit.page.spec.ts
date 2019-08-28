import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCreditPage } from './free-credit.page';

describe('FreeCreditPage', () => {
  let component: FreeCreditPage;
  let fixture: ComponentFixture<FreeCreditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeCreditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeCreditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
