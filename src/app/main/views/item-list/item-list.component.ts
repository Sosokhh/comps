import {Component, Input} from '@angular/core';
import {Item} from "../../../models/main.model";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  @Input() items: Item[] = [];

}
