import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from '../customer/customer.component';
import { CustomersService } from '../customers.service';
import { Customer } from '../interfaces';

const SESSION_CUSTOMER_KEY = 'selectedCustomerId';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CustomerComponent, CommonModule],
  templateUrl: './customerlist.component.html',
  styleUrl: './customerlist.component.css'
})

export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  selectedCustomerId: number = NaN;
  customersService: CustomersService = inject(CustomersService);

  constructor() {
    this.customersService.getCustomers().then((customerList: Customer[]) => this.customerList = customerList);
  }

  ngOnInit() {
    this.selectedCustomerId = Number(sessionStorage.getItem(SESSION_CUSTOMER_KEY));
  }

  onSelectCustomer(id: number) {
    this.selectedCustomerId = id;
    sessionStorage.setItem(SESSION_CUSTOMER_KEY, `${id}`);
  }
}
