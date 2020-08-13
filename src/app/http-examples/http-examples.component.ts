import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-examples',
  templateUrl: './http-examples.component.html',
  styleUrls: ['./http-examples.component.css']
})
export class HttpExamplesComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (posts) => console.log(posts)
    );
  }

  addPost() {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    this.http.post('https://jsonplaceholder.typicode.com/posts', newPost).subscribe(
      (resultat) => console.log(resultat)
    );
  }
}
