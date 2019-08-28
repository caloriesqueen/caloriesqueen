import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DobPage } from './dob.page';

describe('DobPage', () => {
  let component: DobPage;
  let fixture: ComponentFixture<DobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DobPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
