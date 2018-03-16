import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//componente
import { CatalogoComponent } from './supermercado/catalogo/catalogo.component';
import { CarritoComponent } from './supermercado/carrito/carrito.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
//Service
import { ProductosService } from './providers/productos.service';

//Pipe
import { FilterPipe } from './pipes/filter.producto';


@NgModule({
  declarations: [
    AppComponent,
    SupermercadoComponent,
    CatalogoComponent,
    FilterPipe,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [
    ProductosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
