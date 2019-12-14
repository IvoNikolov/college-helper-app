import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestsPage } from './fests.page';

describe('FestsPage', () => {
  let component: FestsPage;
  let fixture: ComponentFixture<FestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
