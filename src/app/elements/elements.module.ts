import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import {MatCardModule} from "@angular/material/card";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { CardsComponent } from './cards/cards.component';
import {MatButtonModule} from "@angular/material/button";
import { CardComponent } from './cards/card/card.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceholderComponent,
    CardsComponent,
    CardComponent
  ],
    imports: [
        CommonModule,
        ElementsRoutingModule,
        MatCardModule,
        NgxSkeletonLoaderModule,
        MatButtonModule,
        SharedModule
    ]
})
export class ElementsModule { }
