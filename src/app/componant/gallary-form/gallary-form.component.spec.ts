import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallaryFormComponent } from './gallary-form.component';

describe('GallaryFormComponent', () => {
  let component: GallaryFormComponent;
  let fixture: ComponentFixture<GallaryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallaryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
