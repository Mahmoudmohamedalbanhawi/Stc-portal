import { Component , inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'stc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(public translate:TranslateService){}
  currentlang = 'en';
  translateService = inject(TranslateService);
  changelanguage(){
    this.currentlang = this.currentlang  == 'en' ? 'ar' :'en';
    this.translateService.setDefaultLang(this.currentlang);
    this.translateService.use(this.currentlang); 
  }
}
