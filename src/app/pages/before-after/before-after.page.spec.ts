import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeAfterPage } from './before-after.page';

describe('BeforeAfterPage', () => {
  let component: BeforeAfterPage;
  let fixture: ComponentFixture<BeforeAfterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeAfterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeAfterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
