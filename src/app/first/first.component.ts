import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name = 'cnrps';
  isHidden = false;
  constructor() { }

  ngOnInit() {
  }
  hideShow() {
    this.isHidden = !this.isHidden;
  }
  consoleMessage(message: string) {
    console.log('tu as écris : ' + message);
  }

}
