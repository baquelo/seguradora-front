import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  baseUrl: string =
    'https://my-json-server.typicode.com/baquelo/seguradora-front';

    constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}/customers`);
  }

  deleteCustomer(id: number) {
    const response = this.http.delete(`${this.baseUrl}/customers/${id}`);
  }
}
