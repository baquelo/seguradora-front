import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersCreateComponent } from './customers-create/customers-create.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomersListComponent,
    CustomersCreateComponent,
    CustomersEditComponent,
  ],
  imports: [BrowserModule, RouterModule],
})
export class CustomersModule {}
