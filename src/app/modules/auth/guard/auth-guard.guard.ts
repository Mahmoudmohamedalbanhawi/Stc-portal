import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate{
  constructor(private router:Router , private userService:UserService){}
  canActivate():boolean{
      if(this.userService.isInAuthFlow()){
        alert('please sign in first')
        this.router.navigate(['auth']);
        return false;
      }
      
      return true;
  }
}

// authGuardGuard