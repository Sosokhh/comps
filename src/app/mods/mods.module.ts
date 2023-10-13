import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModsRoutingModule} from './mods-routing.module';
import {ModsHomeComponent} from './mods-home/mods-home.component';
import {ModalComponent} from './modal/modal.component';
import {AccordionComponent} from './accordion/accordion.component';
import {SharedModule} from "../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ModsHomeComponent,
    ModalComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ]
})
export class ModsModule { }
