import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeCtaComponent } from './te-cta.component';

describe('TeCtaComponent', () => {
  let component: TeCtaComponent;
  let fixture: ComponentFixture<TeCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
