import { Component, OnInit } from '@angular/core';
import { Stock } from './../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public stock: Stock;

  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Prueba de Stock Company','TSC',175,80);
  }

  //creamos una función o método
  toggleFavorite(event) {
    console.log("He cambiado el estado de 'favorite'", event);
    this.stock.favorite = !this.stock.favorite;
  }


}
