import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from '../customer/customer.component';
import { CustomersService } from '../customers.service';
import { Customer, UpdateCustomerFormInput } from '../interfaces';

const SESSION_CUSTOMER_KEY = 'selectedCustomerId';

// For the purpose of the exercise, making a list component specific to customers.
// depending on the project and how the visual components need to be used,
// maybe better to use generic ui components that take inputs like a list
// if we expect to need to have a consistent brand across products/models.
// In that case, we might want a generic table (assuming table is the UX solution) 
// that has input for a list of components/data, styles, headers, etc.
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
  // Using this component as the orchestrator for communication with the api service.
  // Ideally this allows Customer to be a simpler, stateless component.
  // Did not implement a state management system (preference for Flux). 
  // In which case, would rather the smaller components own the data
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

  async onEditCustomerSave(id: number, customerUpdate: UpdateCustomerFormInput<string>) {
    const status = await this.customersService.updateCustomer(id, customerUpdate);
    if (status == 'SUCCESS') {
      // let the user know it succeeded somehow
    } else {
      // let user know it failed
    }
  }

  async onDeleteCustomer(id: number) {
    const status = await this.customersService.deleteCustomer(id);
    if (status == 'SUCCESS') {
      // remove customer from customer list
      // let the user know it succeeded somehow
      sessionStorage.setItem(SESSION_CUSTOMER_KEY, `NaN`);
    } else {
      // let user know it failed
    }
  }
}
