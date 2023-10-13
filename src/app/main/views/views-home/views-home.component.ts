import {Component, OnInit} from '@angular/core';
import { ViewsService} from "../../../services/views/views.service";
import {Item} from "../../../models/main.model";

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent implements OnInit{
  items: Item[] = [];
  constructor(private viewsService: ViewsService) {
  }

  ngOnInit() {
    this.items = this.viewsService.items;
  }
}
