import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  userData: any;

  constructor(private router: Router) {
 
    const navigation = this.router.getCurrentNavigation();
    this.userData = navigation?.extras?.state?.['userData'];
  }

  goBack() {
    this.router.navigate(['/']);  
  }
}
