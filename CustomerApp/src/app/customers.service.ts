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
    // An nice to have for this call would be pagination and filtering for future features
    // Also for big data can help cut down the size of a payload as user needs it
    const data = await fetch(BASE_SERVICE_URL);
    // Strong believer in strong lin
    const customers: Customer[] = mapCustomersToClient(data);
    return await customers;
  }

  async getCustomer(id: number): Promise<Customer> {
    const data = await fetch(`${BASE_SERVICE_URL}/${id}`);
    const customer: Customer = mapCustomerToClient(data);

    return await customer;
  }

  async createCustomer(newInput: NewCustomerFormInput<string>): Promise<Customer | null> {
    const data = await fetch(BASE_SERVICE_URL, {
        method: 'POST',
        body: JSON.stringify(newInput),
      }
    );
    let newCustomer: Customer | null = null;
    if (data.ok) {
      newCustomer = mapCustomerToClient(data);
    }

    return newCustomer;
  }

  async updateCustomer(id: number, updateInput: UpdateCustomerFormInput<string>): Promise<Status> {
    const updateRequestBody: {} = mapCustomerToService(updateInput);
    const data = await fetch(`${BASE_SERVICE_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updateRequestBody),
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
// For now add, helper functions that aren't defined elsewhere to represent