import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  testAlert(message): void {
    let alertMessage = '';
    if(message){
      alertMessage = '"' + message + '" has no function in the prototype';
    } else {
      alertMessage = 'This has no function in the prototype';
    }
    console.log(alertMessage);
  }

}
