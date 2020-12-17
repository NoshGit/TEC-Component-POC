import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less']
})
export class GridComponent implements OnInit {

  small = {
    class : 'small'
  };
 
  medium = {
    class : 'medium'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
