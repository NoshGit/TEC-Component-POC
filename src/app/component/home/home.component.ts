import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  title = 'ANGULAR COMPONENT POC';
  constructor() { }
  showFiller = false;
  width = 0;
  ngOnInit(): void {
    this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    console.log(this.width);
  }
}
