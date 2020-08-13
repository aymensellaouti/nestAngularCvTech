import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() filsVar = 'je suis la valeur du fils';
  @Output() sendDataToFather = new EventEmitter();
  age = 5;
  sonColor = 'lightblue';
  constructor() { }
  ngOnInit() {
  }
  sendEvent() {
    this.sendDataToFather.emit(this.sonColor);
  }
  /*
  * Créer un événement
  * Passer les données
  * emmet l'évenement
  * */

}
