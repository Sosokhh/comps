import {Component, Input} from '@angular/core';
import {accItem} from "../../../models/main.model";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() items: accItem[] = [];
}
