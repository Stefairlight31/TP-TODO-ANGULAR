import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
  export class TodoListComponent implements OnInit {


@Input() todo: Todo; // declaration d'input
@Output() completed = new EventEmitter<boolean>();



  constructor() {
   }



  ngOnInit() {
  }


  onChangementDeCoche($event) {

    console.log('event.target.check = ' + $event.target.checked);
    this.completed.emit($event.target.checked);

  }




}
