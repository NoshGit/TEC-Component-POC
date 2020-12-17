import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TePromoGridComponent } from './te-promo-grid.component';

describe('TePromoGridComponent', () => {
  let component: TePromoGridComponent;
  let fixture: ComponentFixture<TePromoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TePromoGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TePromoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
