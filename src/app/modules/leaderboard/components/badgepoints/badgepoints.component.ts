import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'stc-badgepoints',
  templateUrl: './badgepoints.component.html',
  styleUrl: './badgepoints.component.scss'
})
export class BadgepointsComponent implements OnInit {
  constructor(public translate:TranslateService){}
  badgepoints!:any[];
  ngOnInit(): void {
    this.loadbadgepoints();
    this.translate.onLangChange.subscribe(()=>{
      this.loadbadgepoints()
    })
  }
  isEarnedBadge(pill: string): boolean {
    return (
      pill === 'Earned badge' || (this.translate.currentLang === 'ar' && pill === 'شارة مكتسبة')
    );
  }

  isComingBadge(pill: string): boolean {
    return (
      pill === 'Coming badge' || (this.translate.currentLang === 'ar' && pill === 'شارة قادمة')
    );
  }
  loadbadgepoints():void {
    const badgepoints = this.translate.instant('leaderboard.badgepoint');
    if(badgepoints){
      this.badgepoints = badgepoints
    }
  }
}
