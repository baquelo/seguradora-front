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
    this.customersService.getCustomers().subscribe(customers => this.customers = customers);
  }

  deleteCustomer(id: number) {
    this.customersService.deleteCustomer(id);
  }
}
