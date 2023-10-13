import { Component } from '@angular/core';
import {Item, ModsService} from "../mods.service";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss'],
  providers: [ModsService]
})
export class ModsHomeComponent {
  items: Item[] = [];
  animal: string = '';
  name: string = '';

  constructor(private modsService: ModsService, private dialog: MatDialog) {
    this.items =  this.modsService.items;
  }

  onModalShow() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {name: this.name, animal: this.animal},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
