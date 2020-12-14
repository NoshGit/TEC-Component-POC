import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddToCartModalComponent} from '../add-to-cart-modal/add-to-cart-modal.component';

@Component({
  selector: 'te-add-to-cart',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.less']
})

export class AddToCartButtonComponent implements OnInit {
  @Input() ctaInfo: any;
  constructor(public dialog: MatDialog) {}
    
  ngOnInit(): void {
    console.log(this.ctaInfo);
  }
  openDialog() {
    var modalWidth = "900px";
    const dialogRef = this.dialog.open(AddToCartModalComponent,
    {
        id:"test",
        data: {
          modalname: "add-to-cart-modal"
        },
        width: modalWidth,
        panelClass: 'atc-modal',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}