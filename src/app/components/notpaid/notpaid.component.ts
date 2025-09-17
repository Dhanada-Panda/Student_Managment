import { Component } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './notpaid.component.html',
  styleUrls: ['./notpaid.component.css'],
})
export class NotpaidComponent {
  payment = {
    premiumAmount: 10000,
    lastUpdated: '02/Sep/2025 12:20 pm',
  };
}
