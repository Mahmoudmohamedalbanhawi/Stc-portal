import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private notInterested: boolean = false;
  private inAuthFlow: boolean = true; 
  setAuthFlow(status:boolean):void{
    this.inAuthFlow = status;
    localStorage.setItem('inAuthFlow', JSON.stringify(status))
  };
  isInAuthFlow():boolean{
    const storedValue = localStorage.getItem('inAuthFlow');

    return storedValue ? JSON.parse(storedValue) : this.inAuthFlow
  }
  setNotInterested(status: boolean): void {
    console.log('Setting not interested:', status);
    this.notInterested = status;
    localStorage.setItem('notInterested', JSON.stringify(status)); 
  }
  
  
  isNotInterested(): boolean {
    const storedValue = localStorage.getItem('notInterested');
    const result = storedValue ? JSON.parse(storedValue) : this.notInterested;
    console.log('Not Interested status from storage:', result);
    return result;
  }
}
