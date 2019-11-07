import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumnos/alumno';
import { RFIDService } from 'src/app/services/rfid.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnos: Alumno[];
  constructor(private rfidService: RFIDService) { }

  ngOnInit() {
    this.alumnos.push( 
      {id:123, name:'xd' ,matricula:213, id_RFID:1233}
      )
  }

  crearAlumno(){
    
  }

  //Servicio para obtener alumnos()

  editarAlumno(){

  }
  eliminarAlumno(){
    
  }

  


}
