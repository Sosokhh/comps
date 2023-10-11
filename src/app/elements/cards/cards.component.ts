import { Component } from '@angular/core';
import {Card, CardsService} from "./cards.service";

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
