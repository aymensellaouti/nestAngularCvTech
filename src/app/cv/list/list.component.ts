import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/personne';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  // @Output() itemSelectPersonne = new EventEmitter();
  constructor(
    private cvService: CvService
  ) { }
  date = new Date();
  ngOnInit() {
    this.cvService.getPersonnes().subscribe(
      (personnes) => {
        this.personnes = personnes;
      },
      (erreur) => {
        this.personnes = this.cvService.getFakePersonnes();
        alert(`Problème de connexions les donnèes sont fictives :(`);
      }
    );
  }

  // forwardPersonne(personne: Personne) {
  //   this.itemSelectPersonne.emit(personne);
  // }
}
