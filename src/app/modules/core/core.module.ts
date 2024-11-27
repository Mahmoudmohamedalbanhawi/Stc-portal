import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { RouterModule } from '@angular/router';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { LayoutComponent } from './layout/layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HttpClientModule } from '@angular/common/http';
export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'assets/i18n/','.json');
}
 
@NgModule({
  declarations: [
    LayoutComponent,
    NavBarComponent,
    SideBarComponent
    ],
  imports: [
    HttpClientModule,
   ToolbarModule ,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    })
  ],
  providers:[provideHttpClient()],
  exports: [
    RouterModule,
    LayoutComponent,
   
  ],
})
export class CoreModule {}