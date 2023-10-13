import {Component, Input} from '@angular/core';
import {Item} from "../mods.service";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() items: Item[] = [];
  panelOpenState: boolean = false;
}
