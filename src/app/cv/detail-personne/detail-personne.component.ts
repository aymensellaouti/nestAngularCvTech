import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CvService} from '../services/cv.service';
import {Personne} from '../Model/personne';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css']
})
export class DetailPersonneComponent implements OnInit {
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (mesParams) => {
        this.cvService.getPersonneById(mesParams.id).subscribe(
          (personne) => this.personne = personne,
          (erreur) => this.router.navigate([''])
        );
      }
    );
  }

  deletePersonne() {
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (reponse) => {
        console.log(reponse);
        this.router.navigate(['']);
      },
      (errur) => console.log(errur)
    );
  }
}
