import { Component } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './cheque.component.html',
  styleUrls: ['./cheque.component.css'],
})
export class ChequeComponent {
  payment = {
    premiumStatus: 'Sufficient',
    paymentStatus: 'Bounced',
    asbaRegNumber: 'ICICI28334349934234',
    premiumAmount: 10000,
    paidOn: '02/Sep/2025 12:20 pm',
    lastUpdated: '02/Sep/2025 12:20 pm',
  };
}
