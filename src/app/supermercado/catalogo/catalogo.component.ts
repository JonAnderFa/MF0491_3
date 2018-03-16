import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../model/producto';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  @Input ('productoParametro') producto: Producto;
  constructor() { }

  ngOnInit() {
  }

}
