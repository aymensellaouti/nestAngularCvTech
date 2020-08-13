import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  defaultColor = 'red';
  color = this.defaultColor;
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }
  changeColor(newColor: string) {
    this.color = newColor;
  }
  resetDefaultColor() {
    this.color = this.defaultColor;
    this.todoService.loggerTodos();
  }
}
