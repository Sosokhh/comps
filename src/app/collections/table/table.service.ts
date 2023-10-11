import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Post {
  id: number;
  name: string;
  email: string;
  body: string;
}

@Injectable()
export class TableService {

  constructor(private http: HttpClient) {

  }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
