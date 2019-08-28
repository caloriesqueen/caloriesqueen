import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesPage } from './calories.page';

describe('CaloriesPage', () => {
  let component: CaloriesPage;
  let fixture: ComponentFixture<CaloriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
