import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { MOCKS_PRODUCTOS } from './mocks.productos';
import { element } from 'protractor';

@Injectable()
export class ProductosService {

  productos:Producto[]
  constructor() { 
    console.log('ProductoService constructor');
     this.productos = [];
  }
  /** 
   * Retorna todos los Productos que tenemos en Stock (dentro de los mocks)
  */
 getAll():Producto[]{
  console.log('ProductosService getAll');
  //Creamos el producto fuera del array
  let producto;
  
  let jsonData = JSON.parse(MOCKS_PRODUCTOS.stock);

  jsonData.forEach( element => {

      producto = new Producto( 
                        
                        element.nombre, 
                        element.precio, 
                        element.oferta,
                        element.precioOferta,
                        element.descripcionCantidad,
                        element.foto

                        );

    this.productos.push(producto);

  });

  return this.productos;
}

}
