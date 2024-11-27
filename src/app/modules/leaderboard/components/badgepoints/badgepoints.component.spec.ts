import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgepointsComponent } from './badgepoints.component';

describe('BadgepointsComponent', () => {
  let component: BadgepointsComponent;
  let fixture: ComponentFixture<BadgepointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BadgepointsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgepointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
