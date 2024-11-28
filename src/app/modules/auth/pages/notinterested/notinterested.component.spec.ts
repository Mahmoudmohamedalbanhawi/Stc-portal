import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotinterestedComponent } from './notinterested.component';

describe('NotinterestedComponent', () => {
  let component: NotinterestedComponent;
  let fixture: ComponentFixture<NotinterestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotinterestedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotinterestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
