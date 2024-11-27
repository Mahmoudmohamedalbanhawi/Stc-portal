import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'stc-home-links',
  templateUrl: './home-links.component.html',
  styleUrl: './home-links.component.scss'
})
export class HomeLinksComponent {
  constructor(public translate:TranslateService){}
}
