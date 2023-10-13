import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../../../models/main.model";



@Injectable()
export class TableService {

  constructor(private http: HttpClient) {

  }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/photos');
  }
}
