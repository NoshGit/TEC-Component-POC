import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'te-promo-grid',
  templateUrl: './te-promo-grid.component.html',
  styleUrls: ['./te-promo-grid.component.less']
})
export class TePromoGridComponent implements OnInit {
  @Input() promoGridSize: any;
  constructor() { }

  ngOnInit(): void {
  }

}
