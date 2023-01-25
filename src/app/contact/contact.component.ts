import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = "";
  email: string = "";
  message: string = "";
  constructor(){}
  submitForm() {
    console.log(this.name, this.email, this.message);
    // send the form data to an API endpoint or email address
  }
  buttonAction: any; 
}
