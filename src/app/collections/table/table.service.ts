import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Post {
  id: number;
  title: string;
  url: string;
}

@Injectable()
export class TableService {

  constructor(private http: HttpClient) {

  }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/photos');
  }
}
