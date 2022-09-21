import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billpayment',
  templateUrl: './billpayment.component.html',
  styleUrls: ['./billpayment.component.css']
})
export class BillpaymentComponent implements OnInit {

  total_units: number = 0;

  total_bill: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calculateBill(): void {

    if (this.total_units <= 100) {
      this.total_bill = this.total_units
    } else if (this.total_units <= 200) {
      this.total_bill = 100 + ((this.total_units - 100) * 2)
    }
    else if (this.total_units <= 300) {
      this.total_bill = 300 + ((this.total_units - 200) * 3)
    }
    else {
      this.total_bill = 600 + ((this.total_units - 300) * 5)
    }
  }
}
