import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  constructor(public peticion:HttpClient) {

    console.log("arrancando el servicio")

   }

   buscarHabitaciones():Observable<any>{
     return this.peticion.get('https://hoteles2022.herokuapp.com/hoteles/v1/habitaciones')
   }
}
