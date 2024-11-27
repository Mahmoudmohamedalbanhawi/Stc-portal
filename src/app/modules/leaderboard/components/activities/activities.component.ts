import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'stc-activities',
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent implements OnInit {
  constructor(public translateService: TranslateService) {}
  activities!:any[];

  cols!:any[];
  ngOnInit(): void {
    this.loadActivities();
  this.cols = [
    { field: 'activity', header: 'Activity' },
    { field: 'points', header: 'Points' },
];
this.translateService.onLangChange.subscribe(() => {
  this.loadActivities();
});
  }
  loadActivities(): void {
    const activities = this.translateService.instant('leaderboard.activitie');
    if (activities) {
      this.activities = activities;
    }
  }
}
