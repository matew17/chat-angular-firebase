import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit() {
  }

  login(proveedor: string) {
    this.chatService.login(proveedor);
  }

}
