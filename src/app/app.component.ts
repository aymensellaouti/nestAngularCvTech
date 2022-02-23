import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient) {
  }
  title = 'cnrps';

  ngOnInit() {
    this.http.get('http://localhost:3000/todo').subscribe(
      (data) => console.log(data),
      (erreur) => console.log(erreur)
    );
  }
}
