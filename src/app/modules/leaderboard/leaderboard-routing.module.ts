import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './leaderboard.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { BadgepointsComponent } from './components/badgepoints/badgepoints.component';

const routes: Routes = [{ path: '', component: LeaderboardComponent,
  children:[
    {path:'' , redirectTo:'activities' , pathMatch:'full'},
    {path:'activities' , component:ActivitiesComponent},
    {path:'badgepoints' , component:BadgepointsComponent}
  ]
 }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderboardRoutingModule { }
