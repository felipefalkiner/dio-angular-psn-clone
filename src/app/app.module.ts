import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPricingComponent } from './components/card/card-pricing/card-pricing.component';
import { TopMenuItemComponent } from './components/top-menu/top-menu-item/top-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HomeComponent,
    CardComponent,
    CardLabelComponent,
    CardPricingComponent,
    TopMenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
