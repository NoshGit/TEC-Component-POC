import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeCompactPromoGridComponent } from './te-compact-promo-grid.component';

describe('TeCompactPromoGridComponent', () => {
  let component: TeCompactPromoGridComponent;
  let fixture: ComponentFixture<TeCompactPromoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeCompactPromoGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeCompactPromoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
