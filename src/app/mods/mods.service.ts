import { Injectable } from '@angular/core';

export interface Item {
  title: string;
  content: string;
}

@Injectable()
export class ModsService {
  items: Item[] = [
    {title: 'Why is the sky blue?', content: 'The sky is blue because it is'},
    {title: 'What does an orange taste like?', content: 'An orange tastes like an orange'},
    {title: 'What color is that cat', content: 'The cat is an orange color'}
  ]
  constructor() { }
}
