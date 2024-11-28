import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { MainsecHomeComponent } from './components/mainsec-home/mainsec-home.component';
import { HomeLinksComponent } from './components/home-links/home-links.component';
import { TrendComponent } from './components/trend/trend.component';
import { FollowedTopicsComponent } from './components/followed-topics/followed-topics.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { HighlightedTopicsComponent } from './components/highlighted-topics/highlighted-topics.component';
import { QuestionDetailsComponent } from './components/question-details/question-details.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    HomeComponent,
    MainsecHomeComponent,
    HomeLinksComponent,
    TrendComponent,
    FollowedTopicsComponent,
    LatestNewsComponent,
    HighlightedTopicsComponent,
    QuestionDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    CoreModule
  ]
})
export class HomeModule { }
