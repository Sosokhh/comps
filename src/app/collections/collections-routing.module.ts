import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CollectionsHomeComponent} from "./collections-home/collections-home.component";
import {CompaniesComponent} from "./tabs/companies/companies.component";
import {PartnersComponent} from "./tabs/partners/partners.component";
import {BiographyComponent} from "./tabs/biography/biography.component";

const routes: Routes = [
  {path: '', component: CollectionsHomeComponent,
    children: [
      { path: '', component: BiographyComponent },
      { path: 'partners', component: PartnersComponent },
      { path: 'companies', component: CompaniesComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
