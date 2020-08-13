import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../Model/personne';
import {LoggerService} from '../../services/logger.service';
import {Router} from '@angular/router';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne;
  constructor(
    private loggerService: LoggerService,
    private router: Router,
    private cvService: CvService
  ) { }

  ngOnInit() {
    this.loggerService.logger('cc je suis le détail');
    this.cvService.selectItemSubject.subscribe(
      (personne) => this.personne = personne
    );
  }

  goToDetail() {
    this.router.navigate(['cv', this.personne.id]);
  }
}
