import { Component, OnInit } from '@angular/core';
import { RFIDService } from './services/rfid.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RFID';

  mensajesSubscription: Subscription;
  mensajes: any[] = [];

  constructor(
    private rfidService: RFIDService,
    // public chatService: ChatService
  ) {

  }
  ngOnInit() {
    // this.rfidService.checkStatusSocket();

    this.mensajesSubscription = this.rfidService.getMessages().subscribe(response => {
      console.log('mensaje desde el Servidor:',response);
      this.mensajes.push(response);
      var respuesta:any = response;
      console.log(respuesta.validacion);
      if(respuesta.validacion == 1){

      }
    });
  }

  enviarMsj1(){
    let msj = 'hola desde angular';
    this.rfidService.enviarMSJ(msj,'mensaje')
  }
  enviarMsj2(){
    let msj = 'hola desde angular opcion 2';
    this.rfidService.enviarMSJ(msj,'mensaje2')

  }
  enviarMsj3(){
    let msj = 'hola desde angular';
    this.rfidService.enviarMSJ(msj,'mensaje3')

  }

  enviarMsj4(){
    let msj = 'hola desde angular';
    this.rfidService.enviarMSJ(msj,'mensaje4')
  }

}
