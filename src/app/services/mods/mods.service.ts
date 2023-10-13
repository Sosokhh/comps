import {Injectable} from '@angular/core';
import {accItem} from "../../models/main.model";

@Injectable()
export class ModsService {
  items: accItem[] = [
    {title: 'Why is the sky blue?', content: 'The sky is blue because it is'},
    {title: 'What does an orange taste like?', content: 'An orange tastes like an orange'},
    {title: 'What color is that cat', content: 'The cat is an orange color'}
  ]
  constructor() { }
}
