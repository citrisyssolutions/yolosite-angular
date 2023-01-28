
import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(private router: Router) {}


  goToPage() {
    this.router.navigate(['/cart']);
  }

}

