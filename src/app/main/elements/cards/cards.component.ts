import { Component } from '@angular/core';
import {CardsService} from "./cards.service";
import {Card} from "../../../models/main.model";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  providers: [CardsService]
})
export class CardsComponent {
  cards!: Card[];

  constructor(private cardsService: CardsService) {
    this.cards = this.cardsService.cards;
  }

}
