import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesListUsingAmplifyComponentPage } from './images-list-using-amplify-component.page';

describe('ImagesListUsingAmplifyComponentPage', () => {
  let component: ImagesListUsingAmplifyComponentPage;
  let fixture: ComponentFixture<ImagesListUsingAmplifyComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesListUsingAmplifyComponentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesListUsingAmplifyComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
