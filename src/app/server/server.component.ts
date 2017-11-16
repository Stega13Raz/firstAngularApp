import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['server.component.css']
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  openModal(): void {
    $('.serverCompBtn').toggleClass('simpleTransition');
  }
  getServerStatus() {
    return this.serverStatus;
  }
  getColour() {
    return this.serverStatus === 'offline' ? 'red' : 'green';
}

}
