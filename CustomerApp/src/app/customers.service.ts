import { Injectable } from '@angular/core';
import { Customer, NewCustomerFormInput, UpdateCustomerFormInput } from './interfaces';

const BASE_SERVICE_URL = 'https://localhost:7291/api/Customers';
type Status = 'SUCCESS' | 'ERROR';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  // for the purpose of this exercise only making this one class
  // service would be a great thing to create a reusable base interface
  // that could be used to keep services consistent across an application

  constructor() { }

  async getCustomers(): Promise<Customer[]> {
    const data = await fetch(BASE_SERVICE_URL);
    return await data.json() ?? [];
  }

  async getCustomer(id: number): Promise<Customer> {
    const data = await fetch(`${BASE_SERVICE_URL}/${id}`);
    return await data.json() ?? {};
  }

  async createCustomer(newInput: NewCustomerFormInput<string>): Promise<Customer> {
    const data = await fetch(BASE_SERVICE_URL, {
        method: 'POST',
        body: JSON.stringify(newInput),
      }
    );

    return await data.json();
  }

  async updateCustomer(id: number, updateInput: UpdateCustomerFormInput<string>): Promise<Status> {
    const data = await fetch(`${BASE_SERVICE_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updateInput),
      }
    );

    return data.ok ? 'SUCCESS' : 'ERROR';
  }

  async deleteCustomer(id: number): Promise<Status> {
    const data = await fetch(`${BASE_SERVICE_URL}/${id}`, {
        method: "DELETE",
      }
    );

    return data.ok ? 'SUCCESS' : 'ERROR';
  }
}

// TODO: Notes for patterns to add. Adapter. 
// Strong believer of this pattern for easy of code maintenance
// Separate component types from api types
// map request responses to appropriate component type. 
// Allows for one place to update when api contract changes
// Also forces one to be intentional about what data we put into the components
