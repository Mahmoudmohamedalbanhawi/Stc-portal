import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { InvitationComponent } from './pages/invitation/invitation.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { AcceptTermsComponent } from './pages/accept-terms/accept-terms.component';
import { NotinterestedComponent } from './pages/notinterested/notinterested.component';
import { NotInterestedGuard } from './guard/not-interesting.guard';
import { AuthGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  { path: '', component: AuthLayoutComponent,
    children:[
      {path:'' , component:InvitationComponent , canActivate:[NotInterestedGuard]},
      {path:'AcceptTerms' , component:AcceptTermsComponent , canActivate:[NotInterestedGuard]},
      {path:'notinterested' , component:NotinterestedComponent}
    ] 


  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
