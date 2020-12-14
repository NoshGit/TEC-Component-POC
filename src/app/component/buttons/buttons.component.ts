import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buttons-cta',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.less']
})
export class ButtonsComponent implements OnInit {
  showFiller = false;

  AtcCta = {
    classes : '',
  };
  AtcCtaMedium = {
    classes : 'medium',
  };
  AtcCtaSmall = {
    classes : 'small',
  };
  AtcCtaDisabled = {
    classes : 'disabled',
  };
  AtcCtaIcon = {
    classes : 'icon-simple-left',
  };
  AtcCtaIconSmall = {
    classes : 'icon-simple-left-small',
  };
  AtcCtaIconLeft = {
    classes : 'left-icon',
  };
  AtcCtaIconRight = {
    classes : 'right-icon',
  };


  blueCtaInfo = {
    classes : 'te-primary-cta',
    text : 'checkout',
    iconName : ''
  };
  blueCtaInfoMedium = {
    classes : 'te-primary-cta medium',
    text : 'View Product',
    iconName : ''
  };
  blueCtaInfoSmall = {
    classes : 'te-primary-cta small',
    text : 'View Product',
    iconName : ''
  };
  blueCtaInfoDisabled = {
    classes : 'te-primary-cta disabled',
    text : 'checkout',
    iconName : ''
  };
  blueCtaInfoIconLeft = {
    classes : 'te-primary-cta left-icon',
    text : 'add to list',
    iconName : 'view_list'
  };
  blueCtaInfoIconRight = {
    classes : 'te-primary-cta right-icon',
    text : 'checkout',
    iconName : 'keyboard_arrow_right'
  };
  blueCtaInfoIcon = {
    classes : 'te-primary-cta icon-simple-right',
    text : 'test',
    iconName : 'keyboard_arrow_right'
  };

  whiteCta = {
    classes : 'te-white-cta',
    text : 'CONTINUE SHOPPING',
    iconName : ''
  };
  whiteCtaBorder = {
    classes : 'te-white-cta border',
    text : 'CONTINUE SHOPPING',
    iconName : ''
  };
  whiteCtaShadow = {
    classes : 'te-white-cta shadow',
    text : 'Compatible Parts',
    iconName : ''
  };

  grayCta = {
    classes : 'te-gray-cta',
    text : 'Connect With Us',
    iconName : ''
  };
  grayCtaIconLeft = {
    classes : 'te-gray-cta left-icon',
    text : 'EXPORT TO EXCEL',
    iconName : 'save_alt'
  };

  darkGrayCta ={
    classes : 'te-dark-gray-cta',
    text : 'CALL US',
    iconName : ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
