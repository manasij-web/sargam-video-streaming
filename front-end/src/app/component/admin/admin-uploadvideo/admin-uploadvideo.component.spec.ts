import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUploadvideoComponent } from './admin-uploadvideo.component';

describe('AdminUploadvideoComponent', () => {
  let component: AdminUploadvideoComponent;
  let fixture: ComponentFixture<AdminUploadvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUploadvideoComponent ]
    })
    .compileComponents();
   });

    beforeEach(() => {
    fixture = TestBed.createComponent(AdminUploadvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
