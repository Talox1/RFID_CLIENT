import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';



import { API } from '../app-config';
import { RFID } from '../models/rfid/rfid';
import { Message } from '../models/msj/msj'
import { SocketService } from './socket.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class RFIDService {
  api: string = API;
  socket2;
  selectedRFID: RFID = new RFID();
  constructor(private http: HttpClient, private socket: Socket, private socketService: SocketService) {

  }

  enviarMSJ(cuerpo: string,msj:string) {
    const payload = {
      de: 'Angular',
      cuerpo: cuerpo
    };
    console.log('RFID SERVICE: ', payload);
    // this.socket.emit('message',msj);
    this.socketService.emit(msj, payload);
  }

  getMessages() {
    return this.socketService.listen('mensaje-nuevo');
  }





  agregarRFID(params: any): Observable<any> {
    return this.http.post(`${this.api}/alumnos`, params, httpOptions);
  }

  getRFIDS(): Observable<any> {//obtiene todo los RFIDS
    return this.http.get(`${this.api}alumnos/`, httpOptions);
  }

}
