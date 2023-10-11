import {Component} from '@angular/core';
import {Post, TableService} from "../table/table.service";

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss'],
  providers: [TableService]

})
export class CollectionsHomeComponent {
  headers: string[] = ['id', 'name', 'email', 'comment'];
  posts: Post[] = [];

  constructor(private tableService: TableService) {
    this.tableService.getPosts().subscribe((res: Post[]) => {
      this.posts = res;
    })
  }

}
