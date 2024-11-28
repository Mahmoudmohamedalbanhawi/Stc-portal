import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { InvitationComponent } from './pages/invitation/invitation.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { AuthCardComponent } from './components/auth-card/auth-card.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputOtpModule } from 'primeng/inputotp';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { AcceptTermsComponent } from './pages/accept-terms/accept-terms.component';
import { RouterModule } from '@angular/router';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { NotinterestedComponent } from './pages/notinterested/notinterested.component';


@NgModule({
  declarations: [
    AuthComponent,
    InvitationComponent,
    AuthLayoutComponent,
    AuthNavbarComponent,
    AuthCardComponent,
    AcceptTermsComponent,
    NotinterestedComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule,
    SplitButtonModule,
    ToolbarModule,
    CardModule,
    InputTextModule,
    InputOtpModule,
    FormsModule,
    DialogModule,
    TranslateModule,
    CheckboxModule,
    RouterModule,
    InputTextareaModule
  ]
})
export class AuthModule { }
