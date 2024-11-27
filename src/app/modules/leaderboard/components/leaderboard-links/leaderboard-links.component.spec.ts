import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardLinksComponent } from './leaderboard-links.component';

describe('LeaderboardLinksComponent', () => {
  let component: LeaderboardLinksComponent;
  let fixture: ComponentFixture<LeaderboardLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaderboardLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderboardLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
