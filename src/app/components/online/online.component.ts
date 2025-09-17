import { Component } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css'],
})
export class OnlineComponent {
  payment = {
    premiumStatus: 'Deficit',
    paymentStatus: 'Pending',
    asbaRegNumber: 'ICICI28334349934234',
    requestedAmount: 10000,
    premiumAmount: 10000,
    paymentMode: 'NEFT',
    paidOn: '02/Sep/2025 12:20 pm',
    lastUpdated: '02/Sep/2025 12:20 pm',
  };
}
