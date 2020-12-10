import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddToCartButtonComponent} from '../add-to-cart-button/add-to-cart-button.component';
export interface DialogData {
  name: string;
  company: string;
}
@Component({
  selector: 'app-add-to-cart-modal',
  templateUrl: './add-to-cart-modal.component.html',
  styleUrls: ['./add-to-cart-modal.component.less']
})
export class AddToCartModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddToCartButtonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    console.log(this.data);
  }
  
  closeModal(): void {
    console.log('close modal click');
  }

}
