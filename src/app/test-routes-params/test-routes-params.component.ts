import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-test-routes-params',
  templateUrl: './test-routes-params.component.html',
  styleUrls: ['./test-routes-params.component.css']
})
export class TestRoutesParamsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (parametres) => {
        alert(`Bonjour ${parametres.name} ton id est : ${parametres.id}`);
      }
    );
  }

}
