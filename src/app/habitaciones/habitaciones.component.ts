import { Component, OnInit } from '@angular/core';
import { HabitacionesService } from '../servicios/habitaciones.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {

  //http://hoteles2022.herokuapp.com/
  public listahabitaciones:any[]=[]

  constructor(public servicio:HabitacionesService) { 

    this.servicio.buscarHabitaciones()
    .subscribe(respuesta=>{
      this.listahabitaciones=respuesta.datos
    })

  }

  ngOnInit(): void {
  }

}
