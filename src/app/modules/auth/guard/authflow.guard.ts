import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthFlowGuard implements CanActivate{
  constructor(private router:Router , private userService:UserService){}
  canActivate() : boolean {
      if(!this.userService.isInAuthFlow()){
        alert('you already signedin')
        this.router.navigate(['home'])
        return false;
      }
      return true;
  }
}