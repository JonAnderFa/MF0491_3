import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
//Service
import { ProductosService } from './providers/productos.service';
import { CatalogoComponent } from './supermercado/catalogo/catalogo.component';
import { CarritoComponent } from './supermercado/carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    SupermercadoComponent,
    CatalogoComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
