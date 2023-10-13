import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'elements',
    loadChildren: () =>
        import('./main/elements/elements.module').then((m) => m.ElementsModule )},
  { path: 'collections',
    loadChildren: () =>
        import('./main/collections/collections.module').then((m) => m.CollectionsModule )},
  { path: 'views',
    loadChildren: () =>
        import('./main/views/views.module').then((m) => m.ViewsModule )},
  { path: 'mods',
    loadChildren: () =>
        import('./main/mods/mods.module').then((m) => m.ModsModule )},
  {path: '', component: HomeComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
