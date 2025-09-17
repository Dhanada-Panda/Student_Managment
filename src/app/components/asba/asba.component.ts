import { Component } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './asba.component.html',
  styleUrls: ['./asba.component.css'],
})
export class AsbaComponent {
  payment = {
    premiumStatus: 'Excess',
    paymentStatus: 'Refund',
    asbaRegNumber: 'ICICI28334349934234',
    requestedAmount: 10000,
    premiumAmount: 10000,
    expiryDate: '12/Aug/2025',
    paymentMode: 'UPI',
    paidOn: '02/Sep/2025 12:20 pm',
    lastUpdated: '02/Sep/2025 12:20 pm',
  };
}
