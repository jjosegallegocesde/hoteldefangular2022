import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiciosHotelComponent } from './servicios-hotel/servicios-hotel.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { MenuComponent } from './menu/menu.component';
import { FormularioReservaComponent } from './formulario-reserva/formulario-reserva.component';

import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiciosHotelComponent,
    HabitacionesComponent,
    MenuComponent,
    FormularioReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
