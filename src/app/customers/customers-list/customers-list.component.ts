import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
})
export class CustomersListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers() {
    this.customersService
      .getCustomers()
      .subscribe((customers) => (this.customers = customers));
  }

  add(customer: Customer) {
    this.customersService
      .createCustomer(customer)
      .subscribe((customer) => this.customers.push(customer));
  }

  edit(customer: Customer) {
    this.customersService
      .editCustomer(customer)
      .subscribe((customer) => this.customers.push(customer));
  }

  deleteCustomer(id: number) {
    this.customersService.deleteCustomer(id);
  }
}
