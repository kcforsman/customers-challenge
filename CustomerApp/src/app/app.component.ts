import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CustomerListComponent } from './customerlist/customerlist.component';
import { NewCustomerFormComponent } from './new-customer-form/new-customer-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CustomerListComponent, NewCustomerFormComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Customers';
}
