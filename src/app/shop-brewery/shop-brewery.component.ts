import { Component, OnInit } from '@angular/core';
import { BeerServiceService } from '../services/beer-service.service';
import { Beer } from './beer';

@Component({
  selector: 'app-shop-brewery',
  templateUrl: './shop-brewery.component.html',
  styleUrls: ['./shop-brewery.component.scss']
})
export class ShopBreweryComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  beers: Beer[]=[
    {
    nombre:"negra",
    tipo: "negra",

    stock:5,
    quantity:0,
  },
  {
    nombre:"negra",
    tipo: "negra",

    stock:5,
    quantity:0,
  },
  {
    nombre:"negra",
    tipo: "negra",

    stock:5,
    quantity:0,
  },
  {
    nombre:"negra",
    tipo: "negra",
    stock:0,
    quantity:0,
  }]
 
  constructor(private resumen:BeerServiceService) { }

total:number=0

upQuantity(){
 this.total++;



}

enviarResumen(){
  this.resumen.enviar(this.total);
  
}

downQuantity(){
 this.total--;
 
}


}

