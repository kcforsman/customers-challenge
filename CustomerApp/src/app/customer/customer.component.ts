import { Component, Input, , inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersService } from '../customers.service';
import { Customer, UpdateCustomerFormInput } from '../interfaces';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})

export class CustomerComponent {
  customersService: CustomersService = inject(CustomersService);
  @Input() isSelected!: boolean;
  @Input() customer!: Customer;
  @Input() onSelectCustomer!: (id: number) => void;
  @Input() onEditCustomerSave!: (id: number, customerUpdate: UpdateCustomerFormInput<string>) => void;
  @Input() onDeleteCustomer!: (id: number) => void;

  onSelect() {
    this.onSelectCustomer(this.customer.id);
  }

  async onSubmitEdit(customerUpdate: UpdateCustomerFormInput<string>) {
    await this.onEditCustomerSave(this.customer.id, customerUpdate);
  }

  async onClickDelete() {
    await this.onDeleteCustomer(this.customer.id);
  }
}