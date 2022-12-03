import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerServiceService } from '../services/beer-service.service';

@Component({
  selector: 'app-resumen-compra',
  templateUrl: './resumen-compra.component.html',
  styleUrls: ['./resumen-compra.component.scss']
})
export class ResumenCompraComponent implements OnInit {
  
  totales$: Observable<number>;
  
  constructor(private resumen:BeerServiceService) {
    this.totales$=resumen.total.asObservable();

   }
  
  @Input() total: number;
  
  ngOnInit(): void {
   
  }

  
}
