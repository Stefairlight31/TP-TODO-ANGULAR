import { Component } from '@angular/core';
import { Todo } from './model/todo';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
onglet = 'Mon ptit Onglet';
title = 'ToDoList';
todos: Todo[] = [{

  id: 0,
  userId: 0,
  title: 'toto',
  completed: false,

}, {

  id: 1,
  userId: 1,
  title: 'titi',
  completed: false,

}, {

  id: 2,
  userId: 2,
  title: 'tata',
  completed: true,

}];


    maVariable = 0;
    varChampText = '';


    monTableau: string[] = [];
    // tableauTodo: Todo;   // variable tableauTodo qui correspond à l'interface (on creer un attribut de type Todo )

    nbrMot: number;

    nbrCaractere = 0;
    nbrElementTtMots = 0;

    nbrOccurences = 0;       // nombre d'occurence (nombre de ligne) dans la liste
    nbrElementsCoche = 0;    // nombre d'occurence cochées
    nbrElementsDecoche = 0; // nombre d'occurence décochée
    strMot: string;

inputDuTableau() {
   const reducer = (accumulator, currentValue) => accumulator + currentValue;
 // this.tableauTodo.title = this.varChampText;
   console.log('varChampText =' + this.varChampText);
   this.monTableau.push(this.varChampText);
   this.nbrOccurences = this.monTableau.length;

   this.strMot = this.monTableau.reduce(reducer); // Affiche le nombre total de caractères de tous les mots du tableau
   this.nbrMot = this.monTableau.reduce(reducer).length; // Affiche le nombre total d'élement  de tous les mots du tableau

 // function check() {
// document.getElementById("myCheck").checked = true;
// }
// this.nbrElementsCoche =
// this.brElementsDecoche = (this.nbrOccurences - this.brElementsCoche);
}

    incrementVariable(): void {
this.maVariable = this.maVariable + 1;
    }

    onRecupOutput(resultat: boolean, todo: Todo) {
      todo.completed = resultat;
    }
}

