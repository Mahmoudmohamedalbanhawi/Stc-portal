import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedTopicsComponent } from './followed-topics.component';

describe('FollowedTopicsComponent', () => {
  let component: FollowedTopicsComponent;
  let fixture: ComponentFixture<FollowedTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FollowedTopicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowedTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
