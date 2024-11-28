import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrendComponent } from './components/trend/trend.component';
import { FollowedTopicsComponent } from './components/followed-topics/followed-topics.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';

const routes: Routes = [{ path: '', component: HomeComponent, 

  children:[
    {path:'' , redirectTo:'trend' , pathMatch:'full'},
    {path:'trend' , component:TrendComponent},
    {path:'followedtopics',component:FollowedTopicsComponent},
    {path:'latestnews', component:FollowedTopicsComponent}
  ]


}
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
