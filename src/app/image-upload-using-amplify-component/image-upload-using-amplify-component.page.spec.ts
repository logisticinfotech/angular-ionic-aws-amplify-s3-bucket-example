import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadUsingAmplifyComponentPage } from './image-upload-using-amplify-component.page';

describe('ImageUploadUsingAmplifyComponentPage', () => {
  let component: ImageUploadUsingAmplifyComponentPage;
  let fixture: ComponentFixture<ImageUploadUsingAmplifyComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageUploadUsingAmplifyComponentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploadUsingAmplifyComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
