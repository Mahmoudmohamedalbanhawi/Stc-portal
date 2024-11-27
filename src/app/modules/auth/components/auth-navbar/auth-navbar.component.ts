import { Component ,inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'stc-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrl: './auth-navbar.component.scss'
})
export class AuthNavbarComponent {
  currentlang = 'en';
  translateService = inject(TranslateService);
  changelanguage(){

    this.currentlang = this.currentlang  == 'en' ? 'ar' :'en';
    this.translateService.setDefaultLang(this.currentlang);
    this.translateService.use(this.currentlang); 
  }
}
