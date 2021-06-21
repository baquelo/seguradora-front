import { NgModule } from '@angular/core';
import { PoliciesListComponent } from './policies-list/policies-list.component';
import { PoliciesCreateComponent } from './policies-create/policies-create.component';
import { PoliciesEditComponent } from './policies-edit/policies-edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PoliciesFindComponent } from './policies-find/policies-find.component';



@NgModule({
  declarations: [
    PoliciesListComponent,
    PoliciesCreateComponent,
    PoliciesEditComponent,
    PoliciesFindComponent,
  ],
  imports: [RouterModule, SweetAlert2Module, BrowserModule],
})
export class PoliciesModule {}
