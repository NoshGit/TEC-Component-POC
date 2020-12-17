import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './component/buttons/buttons.component';
import { HomeComponent } from './component/home/home.component';
import { GridComponent } from './component/grid/grid.component';
import { AddToCartButtonComponent } from './component/add-to-cart-button/add-to-cart-button.component';
import { AddToCartModalComponent } from './component/add-to-cart-modal/add-to-cart-modal.component';
import { TeCtaComponent } from './component/te-cta/te-cta.component';
import { TeCompactPromoGridComponent } from './component/te-compact-promo-grid/te-compact-promo-grid.component';
import { TePromoGridComponent } from './component/te-promo-grid/te-promo-grid.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    HomeComponent,
    GridComponent,
    AddToCartButtonComponent,
    AddToCartModalComponent,
    TeCtaComponent,
    TeCompactPromoGridComponent,
    TePromoGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule, MatSidenavModule, MatDialogModule, MatIconModule, MatExpansionModule, MatFormFieldModule, MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
