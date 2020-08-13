import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css']
})
export class ObservableExampleComponent implements OnInit {
  sliderObservable: Observable<string>;
  paths = [
    '404.png', 'as.jpg', 'cv.png'
  ];
  path = 'as.jpg';
  constructor() {
  }

  ngOnInit() {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.subscribe((val) => {
      console.log(val);
    });
    observable.subscribe(
      (donnees) => {
        console.log(donnees * 2);
      },
      (erreur) => console.log(erreur),
      () => console.log('Fini :D')
    );
    this.sliderObservable =  new Observable<string>(
      (observer) => {
        let i = 0;
        setInterval(
          () => {
             observer.next(this.paths[i++]);
             if (i === this.paths.length) {
               i = 0;
             }
          }, 1000
        );
      }
    );
    this.sliderObservable.subscribe(
      (path) => this.path = path
    );
  }

}
