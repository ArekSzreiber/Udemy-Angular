import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-success-alert',
    template: `
      <p>this is success alert</p>
    `,
  styles: [
    `
    p{
      color: green;
      font-weight: bold;
      padding: 20px;
      border: 2px solid green;
    }`
  ]
  }
)

export class SuccessAlertComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
