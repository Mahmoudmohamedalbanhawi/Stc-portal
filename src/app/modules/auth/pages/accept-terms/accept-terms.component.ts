import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'stc-accept-terms',
  templateUrl: './accept-terms.component.html',
  styleUrl: './accept-terms.component.scss'
})
export class AcceptTermsComponent {
  constructor(private router:Router , public TranslateService:TranslateService , private userService:UserService){}
  navigate():void{
    this.userService.setAuthFlow(false)
    this.router.navigate(['/home'])
  }
}
