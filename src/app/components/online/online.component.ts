import { Component } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css'],
})
export class OnlineComponent {
  step = 0; // 0 = not paid, 1 = asba, 2 = online, 3 = asba again, 4 = cheque

  payments = {
    notpaid: {
      premiumAmount: 10000,
      lastUpdated: '02/Sep/2025 12:20 pm',
    },
    asba: {
      premiumStatus: 'Excess',
      paymentStatus: 'Refund',
      asbaRegNumber: 'ICICI28334349934234',
      requestedAmount: 10000,
      premiumAmount: 10000,
      expiryDate: '12/Aug/2025',
      paymentMode: 'UPI',
      paidOn: '02/Sep/2025 12:20 pm',
      lastUpdated: '02/Sep/2025 12:20 pm',
    },
    payment: {
      premiumStatus: 'Deficit',
      paymentStatus: 'Pending',
      asbaRegNumber: 'ICICI28334349934234',
      requestedAmount: 10000,
      premiumAmount: 10000,
      expiryDate: '12/Aug/2025',
      paymentMode: 'UPI',
      paidOn: '02/Sep/2025 12:20 pm',
      lastUpdated: '02/Sep/2025 12:20 pm',
    },
    online: {
      premiumStatus: 'Deficit',
      paymentStatus: 'Pending',
      asbaRegNumber: 'ICICI28334349934234',
      requestedAmount: 10000,
      premiumAmount: 10000,
      paymentMode: 'NEFT',
      paidOn: '02/Sep/2025 12:20 pm',
      lastUpdated: '02/Sep/2025 12:20 pm',
    },
    cheque: {
      premiumStatus: 'Sufficient',
      paymentStatus: 'Bounced',
      asbaRegNumber: 'ICICI28334349934234',
      premiumAmount: 10000,
      paidOn: '02/Sep/2025 12:20 pm',
      lastUpdated: '02/Sep/2025 12:20 pm',
    },
  };

  currentPayment: any = this.payments.notpaid;

  cyclePayment() {
    this.step++;
    if (this.step > 4) this.step = 0;

    if (this.step === 0) {
      this.currentPayment = this.payments.notpaid;
    } else if (this.step === 1) {
      this.currentPayment = this.payments.asba;
    } else if (this.step === 2) {
      this.currentPayment = this.payments.online;
    } else if (this.step === 3) {
      this.currentPayment = this.payments.payment;
    } else if (this.step === 4) {
      this.currentPayment = this.payments.cheque;
    }
  }
}
