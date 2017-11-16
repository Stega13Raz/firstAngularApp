import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  warningClickEvent(): void {
    if (!$('.justTextNoWarning').length) {
      $('.warningAlert').after(`
        <p class="justTextNoWarning">It's just text bruh</p>
      `);
    } else if (!$('.justTextNoWarning').is(':visible')) {
      $('.justTextNoWarning').hide().fadeIn('slow');
    } else {
      $('.justTextNoWarning').fadeOut('slow');
    }
  } // warningClickEvent

}
