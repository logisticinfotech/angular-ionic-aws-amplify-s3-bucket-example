import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleImagePreviewPage } from './single-image-preview.page';

describe('SingleImagePreviewPage', () => {
  let component: SingleImagePreviewPage;
  let fixture: ComponentFixture<SingleImagePreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleImagePreviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleImagePreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
