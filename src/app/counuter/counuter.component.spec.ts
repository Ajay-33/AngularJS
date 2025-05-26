import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounuterComponent } from './counuter.component';

describe('CounuterComponent', () => {
  let component: CounuterComponent;
  let fixture: ComponentFixture<CounuterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounuterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
