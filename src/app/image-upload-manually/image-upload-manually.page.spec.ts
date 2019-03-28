import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadManuallyPage } from './image-upload-manually.page';

describe('ImageUploadManuallyPage', () => {
  let component: ImageUploadManuallyPage;
  let fixture: ComponentFixture<ImageUploadManuallyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageUploadManuallyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploadManuallyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
