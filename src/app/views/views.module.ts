import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    ViewsHomeComponent,
    StatisticsComponent,
  ],
    imports: [
        CommonModule,
        ViewsRoutingModule,
        MatCardModule
    ]
})
export class ViewsModule { }
