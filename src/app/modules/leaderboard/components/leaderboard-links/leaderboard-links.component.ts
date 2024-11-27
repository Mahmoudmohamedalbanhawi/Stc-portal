import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'stc-leaderboard-links',
  templateUrl: './leaderboard-links.component.html',
  styleUrl: './leaderboard-links.component.scss'
})
export class LeaderboardLinksComponent {
constructor(public translate:TranslateService){}
}
