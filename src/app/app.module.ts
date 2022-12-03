import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { ShopBreweryComponent } from './shop-brewery/shop-brewery.component';
import { ContactoBreweryComponent } from './contacto-brewery/contacto-brewery.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ItemComponent } from './item/item.component';
import { ResumenCompraComponent } from './resumen-compra/resumen-compra.component';
import { TotalCompraComponent } from './total-compra/total-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    ShopBreweryComponent,
    ContactoBreweryComponent,
    HomeComponentComponent,
    ItemComponent,
    ResumenCompraComponent,
    TotalCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
