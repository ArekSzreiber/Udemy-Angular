import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  displayParagraph: boolean = true;
  clicks = [];

  constructor() {
  }

  ngOnInit() {
  }

  onToggleDisplay() {
    this.displayParagraph = !this.displayParagraph;
    // this.clicks.push(this.clicks.length+1);
    this.clicks.push(new Date());
  }

}
