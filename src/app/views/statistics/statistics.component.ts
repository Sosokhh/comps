import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent  implements OnInit {
   @Input() target: number = 12000;
  followers: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.updateCounter();
  }

  updateCounter() {
    const increment = this.target / 200;
    if (this.followers < this.target) {
      setTimeout(() => {
        this.followers = Math.ceil(this.followers + increment);
        this.updateCounter();
      }, 1);
    }
  }
}
