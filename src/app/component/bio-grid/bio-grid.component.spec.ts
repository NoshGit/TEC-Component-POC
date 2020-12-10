import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioGridComponent } from './bio-grid.component';

describe('BioGridComponent', () => {
  let component: BioGridComponent;
  let fixture: ComponentFixture<BioGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
