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
    this.customers = this.customersService.getCustomers();
  }
}
