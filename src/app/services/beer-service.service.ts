import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerServiceService {

private producto:number
total: BehaviorSubject <number> =  new BehaviorSubject(0);

  constructor() { }

  enviar(total:number){

    this.producto=total;
    this.total.next(this.producto)
    
  }
}
