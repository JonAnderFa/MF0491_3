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
  precio:number;//Precio total del carro

  constructor(public productosService:ProductosService) {
    console.log('SupermercadoComponent constructor');
    this.stock= new Array<Producto>();
    this.cesta= new Array<Producto>();
   }

  //Llamadas a los Services
  ngOnInit() {
    console.log('ProductoComponent ngOnInit');
    this.stock=this.productosService.getAll();
    let producto = new Producto("Oreo",3,false,0,"6€ / paquete","https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Oreo-Two-Cookies.jpg/1200px-Oreo-Two-Cookies.jpg");
    this.cesta.push(producto);
    this.cesta.push(producto);
    this.cesta.push(producto);
    this.cestaPrecio();
    
  }
  cestaPrecio(){
    let total=0;
    this.cesta.forEach(element => {
      total=total+element.precio;
      
    });
    this.precio=total;

  }

}
