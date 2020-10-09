import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    {
      nombre:'Ignacio',especialidad:'HTML',descripcion:'lorem cosito asdasd'      
    },
    {
      nombre:'Diego',especialidad:'CSS',descripcion:'Asdasd ijasiodjas niodasjkn'      
    }
  ]

  constructor() { 
    console.log('fiuncionando servicio')
  }

  obtenerEquipo(){
    return this.equipo;
  }

  obtenerUno(i){
    return this.equipo[i];
  }
}
