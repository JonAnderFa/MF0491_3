import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../model/producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  @Input ('cestaParametro') cesta: Array<Producto>;
  @Input ('precioParametro') total: number;

  constructor() { }

  ngOnInit() {
  }

}
