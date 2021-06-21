import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersCreateComponent } from './customers/customers-create/customers-create.component';
import { CustomersEditComponent } from './customers/customers-edit/customers-edit.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { PoliciesCreateComponent } from './policies/policies-create/policies-create.component';
import { PoliciesEditComponent } from './policies/policies-edit/policies-edit.component';
import { PoliciesFindComponent } from './policies/policies-find/policies-find.component';
import { PoliciesListComponent } from './policies/policies-list/policies-list.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customers', component: CustomersListComponent },
  { path: 'customers/create', component: CustomersCreateComponent },
  { path: 'customers/edit', component: CustomersEditComponent },
  { path: 'policies', component: PoliciesListComponent },
  { path: 'policies/create', component: PoliciesCreateComponent },
  { path: 'policies/edit', component: PoliciesEditComponent },
  { path: 'policies/find', component: PoliciesFindComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
