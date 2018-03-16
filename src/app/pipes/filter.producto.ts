import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../model/producto';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
/**
 * Filtro para buscar en una coleccion de productos, no es CaseSensitive
 * @param stock: es un Producto[](array de productos)
 * @param searchText: es un string con el nombre del producto
 */
transform(stock: Producto[], searchText: string): Producto[] {
    if(!stock) return [];
    if(!searchText) return stock;
    let nombre="";
    searchText = searchText.toLowerCase();
    return stock.filter( it => {
        nombre=it.nombre;
        nombre=nombre.toLowerCase();
        return nombre.toLowerCase().includes(searchText);
    });
   }

}