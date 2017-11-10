import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent {
  openModal(): void {
    $('.serverCompBtn').toggleClass('simpleTransition');
  }
}
