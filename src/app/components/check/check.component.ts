import { Component } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
})
export class CheckComponent {
  payment = {
    premiumStatus: 'Deficit',
    paymentStatus: 'Pending',
    asbaRegNumber: 'ICICI28334349934234',
    requestedAmount: 10000,
    premiumAmount: 10000,
    expiryDate: '12/Aug/2025',
    paymentMode: 'UPI',
    paidOn: '02/Sep/2025 12:20 pm',
    lastUpdated: '02/Sep/2025 12:20 pm',
  };
  asba = {
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
  cheque = {
    premiumStatus: 'Sufficient',
    paymentStatus: 'Bounced',
    asbaRegNumber: 'ICICI28334349934234',
    premiumAmount: 10000,
    paidOn: '02/Sep/2025 12:20 pm',
    lastUpdated: '02/Sep/2025 12:20 pm',
  };
  notpaid = {
    premiumAmount: 10000,
    lastUpdated: '02/Sep/2025 12:20 pm',
  };
  online = {
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
