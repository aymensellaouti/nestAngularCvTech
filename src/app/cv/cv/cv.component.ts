import { Component, OnInit } from '@angular/core';
import {Personne} from '../Model/personne';
import {LoggerService} from '../../services/logger.service';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  // selectedPersonne: Personne;
  nbItem = 0;
  constructor(
    private loggerService: LoggerService,
    private cvService: CvService
  ) { }

  ngOnInit() {
    this.cvService.selectItemSubject.subscribe(
      (personne) => this.nbItem++
    );
  }

  // selectPersonne(personne: Personne) {
  //   this.selectedPersonne = personne;
  //   console.log(personne);
  // }

  logger() {
    this.loggerService.logger('je suis cvComponent je viens d etre crée :D');
  }
}
