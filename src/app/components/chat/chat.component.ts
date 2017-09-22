import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje = '';
  elemento: any;
  constructor(public chatService: ChatService) {

    this.chatService.cargarMensajes().subscribe(() => {
      // console.log('mensajes cargados');
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 100)
    })

  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviar() {
    if (this.mensaje.length === 0) {
      return;
    }
    this.chatService.agregarMensaje(this.mensaje)
      .then(() => {
        // console.log('hecho');
        this.mensaje = '';
      })
      .catch((e) => console.error(e))
  }

}
