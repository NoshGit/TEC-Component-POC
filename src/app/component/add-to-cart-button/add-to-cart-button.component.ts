import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddToCartModalComponent} from '../add-to-cart-modal/add-to-cart-modal.component';

@Component({
  selector: 'te-add-to-cart',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.less']
})

export class AddToCartButtonComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
    openDialog() {
      const dialogRef = this.dialog.open(AddToCartModalComponent,
      {
          data: {
            name: "Simani", company: "capgemini"
          },
          width: '950px',
          panelClass: 'atc-modal',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

  ngOnInit(): void {
  }

}