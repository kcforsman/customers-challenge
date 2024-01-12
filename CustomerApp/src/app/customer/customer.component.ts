import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersService } from '../customers.service';
import { Customer } from '../interfaces';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})

export class CustomerComponent implements OnChanges {
  customersService: CustomersService = inject(CustomersService);
  @Input() selectedCustomerId!: number;
  @Input() isSelected!: boolean;
  @Input() customer!: Customer;
  @Input() onSelectCustomer!: (id: number) => void;

  onSelect() {
    this.onSelectCustomer(this.customer.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  async onSubmitEdit() {
    
    // const status = await this.customersService.updateCustomer(this.customer.id);
    // if (status === 'ERROR') {
    //   alert('Failed to Delete!')
    // }
  }

  async onClickDelete() {
    const status = await this.customersService.deleteCustomer(this.customer.id);
    if (status === 'ERROR') {
      alert('Failed to Delete!')
    }
  }
}