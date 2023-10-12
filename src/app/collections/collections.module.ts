import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CollectionsRoutingModule} from './collections-routing.module';
import {CollectionsHomeComponent} from './collections-home/collections-home.component';
import {TableComponent} from './table/table.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { TabsComponent } from './tabs/tabs.component';
import { BiographyComponent } from './tabs/biography/biography.component';
import { CompaniesComponent } from './tabs/companies/companies.component';
import { PartnersComponent } from './tabs/partners/partners.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent,
    TabsComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
  ]
})
export class CollectionsModule { }
