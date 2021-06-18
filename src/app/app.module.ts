import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { CustomersComponent } from './views/customers/customers.component';
import { CreateComponent } from './views/customers/create/create.component';
import { EditComponent } from './views/customers/edit/edit.component';
import { PoliciesComponent } from './views/policies/policies.component';
import { FindComponent } from './views/policies/find/find.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    CustomersComponent,
    CreateComponent,
    EditComponent,
    PoliciesComponent,
    FindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
