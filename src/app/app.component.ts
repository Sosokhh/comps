import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-tab-router';
  navLinks = [
    {
      label: 'Elements',
      link: './elements',
      index: 0
    },
    {
      label: 'Collections',
      link: './collections',
      index: 1
    }, {
      label: 'Views',
      link: './views',
      index: 2
    }, {
      label: 'Mods',
      link: './mods',
      index: 3
    },
  ];
}
