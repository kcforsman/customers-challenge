import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomersService } from '../customers.service';
import { NewCustomerFormInput } from '../interfaces';

@Component({
  selector: 'app-new-customer-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-customer-form.component.html',
  styleUrl: './new-customer-form.component.css'
})
export class NewCustomerFormComponent {
  customersService: CustomersService = inject(CustomersService);
  newCustomerForm: FormGroup<NewCustomerFormInput<FormControl<string | null>>> = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  async createNewCustomer() {
    const newCustomer = await this.customersService.createCustomer({
      firstName: this.newCustomerForm.value.firstName || '',
      lastName: this.newCustomerForm.value.lastName || '',
      email: this.newCustomerForm.value.email || '',
    });
    if (newCustomer) {
      // let user know it succeeded
    } else {
      // let user know it failed
    }
  }
}
