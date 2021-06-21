import { NgModule } from '@angular/core';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersCreateComponent } from './customers-create/customers-create.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  declarations: [
    CustomersListComponent,
    CustomersCreateComponent,
    CustomersEditComponent,
  ],
  imports: [BrowserModule, RouterModule, SweetAlert2Module],
})
export class CustomersModule {}
