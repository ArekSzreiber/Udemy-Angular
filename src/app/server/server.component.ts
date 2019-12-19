/* tslint:disable:no-inferrable-types */
import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  id: number = 1;
  status: string = 'offline';

  getServerStatus() {
    return this.status;
  }
}

