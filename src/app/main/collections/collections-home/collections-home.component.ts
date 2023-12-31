import {Component} from '@angular/core';
import {TableService} from "../table/table.service";
import {Post} from "../../../models/main.model";

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss'],
  providers: [TableService]

})
export class CollectionsHomeComponent {
  headers: string[] = ['id', 'title', 'url'];
  posts: Post[] = [];

  constructor(private tableService: TableService) {
    this.tableService.getPosts().subscribe((res: Post[]) => {
      this.posts = res;
    })
  }

}
