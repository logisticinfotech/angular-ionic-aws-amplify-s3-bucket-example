import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesListManuallyPage } from './images-list-manually.page';

describe('ImagesListManuallyPage', () => {
  let component: ImagesListManuallyPage;
  let fixture: ComponentFixture<ImagesListManuallyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesListManuallyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesListManuallyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
