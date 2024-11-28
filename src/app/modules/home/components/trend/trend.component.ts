import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HomeService } from '../../../core/services/home.service';
import { Subscription } from 'rxjs';
import { Article } from '../../../core/Interface/articles';

@Component({
  selector: 'stc-trend',
  templateUrl: './trend.component.html',
  styleUrl: './trend.component.scss'
})
export class TrendComponent implements OnInit , OnDestroy  {
  constructor(public translate:TranslateService , public trend:HomeService){}
  errmessage:string= ``
  sub!:Subscription;
  trendslist!:Article[]
  ngOnInit(): void {
    this.sub = this.trend.FetchTrend().subscribe(
      {next: trend=>{
        this.trendslist =trend
        console.log(this.trendslist)
      },
      error:err=>{
        this.errmessage = `something went wrong pls try again`
      }
    }
    )
  
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    console.log(`on destroy`)
  }
}
