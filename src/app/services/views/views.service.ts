import { Injectable } from '@angular/core';
import {Item} from "../../models/main.model";


@Injectable({
  providedIn: 'root'
})
export class ViewsService {
  items: Item[] = [
    {image: '/assets/images/couch.jpeg', title: 'Couch', description: 'This is a fantastic couch to sit on'},
    {image: '/assets/images/dresser.jpeg', title: 'Dresser', description: 'This is a great dresser to put stuff in'}
  ]
  constructor() { }
}
