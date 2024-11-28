import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'stc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'InternalCustomer';
  translateService = inject(TranslateService);
  rtl = this.translateService.getDefaultLang() === 'ar';
  constructor(){
    this.translateService.onLangChange.subscribe(change =>{
      this.rtl = change.lang === 'ar';
    })
  }
}
