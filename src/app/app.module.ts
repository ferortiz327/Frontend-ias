import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListarComponent } from './Tecnico/listar/listar.component';
import { AddComponent } from './Tecnico/add/add.component';
import { DetalleComponent } from './Tecnico/destalle/detalle.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServicioComponent } from './servicio/servicio.component';
import { CrearComponent } from './servicio/crear/crear.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    DetalleComponent,
    ServicioComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
