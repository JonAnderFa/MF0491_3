import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductosService } from '../providers/productos.service';

@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {
  stock: Array<Producto>; //Array casteado a Producto que sirve para mostar en catalogo
  cesta: Array<Producto>; //Array casteado a Producto que sirve para mostar en carrito
  searchText:string;//criterio del buscador

  constructor(public productosService:ProductosService) {
    console.log('SupermercadoComponent constructor');
    this.stock= new Array<Producto>();
   }

  //Llamadas a los Services
  ngOnInit() {
    console.log('ProductoComponent ngOnInit');
    this.stock=this.productosService.getAll();
    
  }

}
