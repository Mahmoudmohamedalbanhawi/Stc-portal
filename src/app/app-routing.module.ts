import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/core/layout/layout/layout.component';
import { NotInterestedGuard } from './modules/auth/guard/not-interesting.guard';
import { NotinterestedComponent } from './modules/auth/pages/notinterested/notinterested.component';
import { AuthGuard } from './modules/auth/guard/auth-guard.guard';
import { AuthFlowGuard } from './modules/auth/guard/authflow.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule), canActivate:[AuthFlowGuard]},
  {
    path: '',
    component: LayoutComponent,canActivate:[NotInterestedGuard , AuthGuard],
    children: [
      { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
      { path: 'leaderboard', loadChildren: () => import('./modules/leaderboard/leaderboard.module').then(m => m.LeaderboardModule)  },
      
    ],
    
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
