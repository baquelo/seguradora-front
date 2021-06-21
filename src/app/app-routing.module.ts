import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersCreateComponent } from './customers/customers-create/customers-create.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customers', component: CustomersListComponent },
  { path: 'customers/create', component: CustomersCreateComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
