import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
  inputValue: string;
  inputValue1: string;
  inputValue2: string;
  inputValue3: string;
  constructor() {
    this.inputValue = "";
    this.inputValue1 = "";
    this.inputValue2 = "";
    this.inputValue3 = "";
   
  }
  

  myimage:string="assets/contact/l3.png"
  myimage1:string="assets/contact/p3.png"
  myimage2:string="assets/contact/m3.png"

  address = {
    office:'Yolo Life',
    location:'(A div. of Thanga Mayil Agro Pvt. Ltd.),',
    street: 'Regd. Office: 8 Second Avenue,',
    city: 'Sundar Nagar, Ekkattuthangal',
    address: 'Chennai 600032',
    phoneNo:'+91.72009 67561',
    Email:'customercare@yololife.in'

  };
  buttonAction() {
  }
}

