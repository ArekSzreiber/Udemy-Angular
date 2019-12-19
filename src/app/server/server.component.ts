/* tslint:disable:no-inferrable-types */
import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online{
      color: white;
    }
  `]
})
export class ServerComponent {
  id: number = 1;
  status: string = 'offline';

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.status;
  }

  getColor() {
    return this.status === 'online' ? 'green' : 'red';
  }
}

