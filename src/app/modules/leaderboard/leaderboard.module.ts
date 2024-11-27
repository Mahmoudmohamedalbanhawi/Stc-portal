import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderboardRoutingModule } from './leaderboard-routing.module';
import { LeaderboardComponent } from './leaderboard.component';
import { MainsecBoardComponent } from './components/mainsec-board/mainsec-board.component';
import { TranslateModule } from '@ngx-translate/core';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { LeaderboardLinksComponent } from './components/leaderboard-links/leaderboard-links.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { BadgepointsComponent } from './components/badgepoints/badgepoints.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    LeaderboardComponent,
    MainsecBoardComponent,
    AchievementsComponent,
    LeaderboardLinksComponent,
    ActivitiesComponent,
    BadgepointsComponent
  ],
  imports: [
    TableModule,
    CommonModule,
    LeaderboardRoutingModule,
    TranslateModule
  ]
})
export class LeaderboardModule { }
