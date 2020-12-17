import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buttons-cta',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.less']
})
export class ButtonsComponent implements OnInit {

  OrangeCta = {
    classes : '',
    text : 'ADD TO CART',
    iconName : ''
  };
  OrangeCtaMedium = {
    classes : 'medium',
    text : 'ADD TO CART',
    iconName : 'shopping_cart'
  };
  OrangeCtaSmall = {
    classes : 'small',
    text : 'ADD TO CART',
    iconName : 'shopping_cart'
  };
  OrangeCtaDisabled = {
    classes : 'disabled',
    text : 'CHECKOUT',
    iconName : ''
  };
  OrangeCtaIcon = {
    classes : 'icon-simple-right',
    text : 'Shop Antennas',
    iconName : 'arrow_right'
  };
  OrangeCtaIconSmall = {
    classes : 'icon-simple-left-small',
    text : 'ADD TO CART',
    iconName : 'shopping_cart'
  };
  OrangeCtaIconLeft = {
    classes : 'left-icon',
    text : 'ADD TO CART',
    iconName : 'shopping_cart'
  };
  OrangeCtaIconRight = {
    classes : 'right-icon',
    text : 'ADD TO CART',
    iconName : 'shopping_cart'
  };


  blueCtaInfo = {
    classes : 'te-secondary-cta',
    text : 'CHECKOUT',
    iconName : ''
  };
  blueCtaInfoMedium = {
    classes : 'te-secondary-cta medium',
    text : 'View Product',
    iconName : ''
  };
  blueCtaInfoSmall = {
    classes : 'te-secondary-cta small',
    text : 'View Product',
    iconName : ''
  };
  blueCtaInfoDisabled = {
    classes : 'te-secondary-cta disabled',
    text : 'CHECKOUT',
    iconName : ''
  };
  blueCtaInfoIconLeft = {
    classes : 'te-secondary-cta left-icon',
    text : 'ADD TO LIST',
    iconName : 'view_list'
  };
  blueCtaInfoIconRight = {
    classes : 'te-secondary-cta right-icon',
    text : 'CHECKOUT',
    iconName : 'keyboard_arrow_right'
  };
  blueCtaInfoIcon = {
    classes : 'te-secondary-cta icon-simple-right',
    text : 'View Products',
    iconName : 'arrow_right'
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

  greyCta = {
    classes : 'te-grey-cta',
    text : 'Connect With Us',
    iconName : ''
  };
  greyCtaIconLeft = {
    classes : 'te-grey-cta left-icon',
    text : 'EXPORT TO EXCEL',
    iconName : 'save_alt'
  };

  darkGreyCta ={
    classes : 'te-dark-grey-cta',
    text : 'CALL US',
    iconName : ''
  };
  darkGreyCtaSmall ={
    classes : 'te-dark-grey-cta small',
    text : 'CALL US',
    iconName : ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
