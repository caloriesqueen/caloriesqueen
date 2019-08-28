import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourProcessPage } from './your-process.page';

describe('YourProcessPage', () => {
  let component: YourProcessPage;
  let fixture: ComponentFixture<YourProcessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourProcessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourProcessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
