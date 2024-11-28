import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'stc-auth-card',
  templateUrl: './auth-card.component.html',
  styleUrl: './auth-card.component.scss'
})
export class AuthCardComponent implements OnInit {
    categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
  ];

constructor(public TranslateService:TranslateService ,private userService:UserService , private fb:FormBuilder , private router:Router){
  
this.otpForm = this.fb.group({
  otp:['' , [Validators.required , Validators.pattern(/^\d+$/) , Validators.minLength(4) , Validators.maxLength(4)]  ]
})
}
selectedCategories: any[] = [];

ngOnInit(): void {
  // this.TranslateService.get()
  // this.TranslateService.onLangChange
 console.log( this.TranslateService.instant('categories.Accounting'))
  this.categories = [
    { name: this.TranslateService.instant('categories.Accounting'), key: 'A' },
    { name: this.TranslateService.instant('categories.Marketing'), key: 'M' },
    { name: this.TranslateService.instant('categories.Production'), key: 'P' },
    { name: this.TranslateService.instant('categories.Research'), key: 'R' }
  ];
}
value:string = ''
visible: boolean = false; 
NotInterested:boolean = false;
anotherDialogVisible: boolean = false;
otpForm!: FormGroup;
showDialog(): void {
  this.visible = true; 
}
ShowNotInteresting():void{
this.NotInterested = true
}
get otpControl() {
  return this.otpForm.get('otp');
}
showAnotherDialog(): void {
  this.visible = false; 
  this.anotherDialogVisible = true; 
  this.otpForm.reset();
  console.log('OTP Submitted:', this.otpForm.value.otp);
}
// navigate():void{
//   this.anotherDialogVisible = false;
//   this.router.navigate(['AcceptTerms'])
// }
onNotInterested():void{
  console.log(`hello world`)
this.userService.setNotInterested(true);
this.router.navigate(['auth/notinterested'])
}
}
