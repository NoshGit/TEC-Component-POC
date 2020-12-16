import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-te-cta',
  templateUrl: './te-cta.component.html',
  styleUrls: ['./te-cta.component.less']
})

export class TeCtaComponent implements OnInit {
  @Input() ctaInfo: any;
  constructor() { }

  ngOnInit(): void {
  }

}
