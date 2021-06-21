import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customersUrl: string =
    'https://my-json-server.typicode.com/baquelo/seguradora-front/customers';

    constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.customersUrl}`);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, customer);
  }

  editCustomer(customer: Customer): Observable<any> {
    return this.http.put(`${this.customersUrl}/${customer.id}`, customer);
  }

  deleteCustomer(id: number) {
    return this.http.delete(`${this.customersUrl}/${id}`);
  }
}
