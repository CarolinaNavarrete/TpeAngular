import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { ContactoBreweryComponent } from './contacto-brewery/contacto-brewery.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ShopBreweryComponent } from './shop-brewery/shop-brewery.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponentComponent
  },
  {
    path: 'shop',
    component: ShopBreweryComponent
  },
  {
    path: 'contacto',
    component: ContactoBreweryComponent
  },
  {
    path: 'cervezas',
    component: BeerListComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
