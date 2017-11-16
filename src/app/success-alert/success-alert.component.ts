import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})

export class SuccessAlertComponent {
  successHoverEvent() {
    if (!$('.smallTooltip').length) {
      $('.successAlertContainer').append(`<div class="smallTooltip" style="font-size: 15px;">Small tooltip</div>`); // This won't get detected in CSS
      $('.smallTooltip').hide().fadeToggle('slow');
    } else {
      $('.smallTooltip').fadeToggle('slow');
    }
  }

}
