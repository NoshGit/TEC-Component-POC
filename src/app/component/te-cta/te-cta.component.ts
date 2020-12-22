import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-te-cta',
  templateUrl: './te-cta.component.html',
  styleUrls: ['./te-cta.component.less']
})

export class TeCtaComponent implements OnInit {
  @Input() ctaInfo: any;
  ctaParams: any = {};
  
  constructor() { }

  ngOnInit(): void {
    if(this.ctaInfo){
      this.ctaParams.classes = this.ctaInfo.classes || 'te-secondary-cta';
      this.ctaParams.text = this.ctaInfo.text || 'CTA LABEL';
      this.ctaParams.iconName = this.ctaInfo.iconName || '';
    }else{
      this.ctaParams = {
        classes : 'te-secondary-cta',
        text : 'CTA LABEL',
        iconName : ''
      };
    }
    
  }

}
