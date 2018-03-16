export class Producto{
    //Declaramos las variables que vamos a utilizar para crear un producto
    nombre:string;
    precio:number;
    oferta:boolean;
    precioOferta:number;
    precioLitro:number;
    foto: string;

    constructor(nombre: string,
    precio:number,
    oferta:boolean,
    precioOferta: number,
    precioLitro:number,
    foto: string
    ){
        console.log('Producto constructor');
        this.nombre=nombre;
        this.precio = precio;
        this.oferta= oferta;
        this.precioOferta= precioOferta;
        this.precioLitro= precioLitro;
        this.foto = foto;

    }

}