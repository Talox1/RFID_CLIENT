import { Component, OnInit } from '@angular/core';
import { RFIDService } from '../../services/rfid.service'
import { RFID } from 'src/app/models/rfid/rfid';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SocketService } from 'src/app/services/socket.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-rfid',
  templateUrl: './rfid.component.html',
  styleUrls: ['./rfid.component.css']
})
export class RfidComponent implements OnInit {
  registerForm: FormGroup;
  rfids:RFID []

  mensajesSubscription: Subscription
  mensajes: any[] = [];

  constructor(private rfidService: RFIDService,
    public fb: FormBuilder,
    private socektService: SocketService) {

      
   }

  ngOnInit() {
    this.rfidService.getRFIDS().subscribe(response =>{
      console.log(response);
      this.rfids = response;
    })

    this.registerForm = this.fb.group({
      
      number_RFID: ['', ],
      
    });

    
  }

  //servicio para obtnener todos los RFID

  getRFID(){
    this.rfidService.getRFIDS().subscribe(response =>{
      console.log(response);
      this.rfids = response;
      this.rfidService.selectedRFID = response[0];//
      
    })
  }
  
  editarRFID(){

  }
  eliminarRFID(){
    
  }

  registrarRFID(msj:string){
    const payload ={
      nombre:'Prueba',
      matricula:123,
      last_name:'prueba',
      id_rfid:1
    }
    this.rfidService.agregarRFID(msj);
  }

  enviarMsj(){
    let msj = 'hola desde angular';
    this.rfidService.enviarMSJ(msj,'')
  }

}
