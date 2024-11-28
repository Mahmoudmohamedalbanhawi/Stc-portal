import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class NotInterestedGuard implements CanActivate {



  constructor(private router: Router , private userService:UserService) {}

  canActivate(): boolean {
    console.log('Guard triggered. Current not interested status:', this.userService.isNotInterested());
    if (this.userService.isNotInterested()) {
      alert('You do not have permission to access this page.');
      console.log('Redirecting to not interested');
      this.router.navigate(['auth/notinterested']);
      return false;
    }
    return true;
  }
 
}