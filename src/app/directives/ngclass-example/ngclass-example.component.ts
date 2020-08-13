import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-example',
  templateUrl: './ngclass-example.component.html',
  styleUrls: ['./ngclass-example.component.css']
})
export class NgclassExampleComponent implements OnInit {
  isAllumee = false;

  constructor() { }

  ngOnInit() {
  }

  allumeEteint() {
    this.isAllumee = ! this.isAllumee;
  }
}
