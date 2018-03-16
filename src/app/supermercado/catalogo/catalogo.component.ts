import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../model/producto';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  @Input ('productoParametro') producto: Producto;
  descuento: number;
  cantidad: number;
  //tenemos que crear un descuentoM por que el metodo toFixed devuelve un strin, asi que operamos con descuento y mostramos este
  descuentoM: string;
  constructor() {
    this.descuento=0;
    this.cantidad=0;
   }
//Tramitamos el descuento en el init de esta manera sacamos el descuento a mostrar
  ngOnInit() {
    this.descuento=this.producto.precio-(this.producto.precio*(this.producto.precioOferta/100));
    this.descuentoM=this.descuento.toFixed(2);
  }
  //Suma cantidad siempre y cuando apretemos el teclado
  sumaCantidad(){
    this.cantidad=this.cantidad+1;
  }
  //Resta cantidad siempre y cuando apretemos el teclado
  restaCantidad(){
    if(this.cantidad!=0){
      this.cantidad=this.cantidad-1;
    }
  }

}
