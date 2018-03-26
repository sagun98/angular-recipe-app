import { Component } from '@angular/core';
import { Recipe } from './model/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe(
        `Honana Bread`,
        `This is a banana bread. Just a filler text.Just a filler textJust a filler text
         Just a filler text.Just a filler textJust a filler tex`,
        null,
        null,
        null
      ),
      new Recipe('Bhat and daal', 'Authentic food of nepal', null, null, null),
      new Recipe(
        'Chowmein',
        `Some kind of street food.Some kind of street foodSome kind of street foodSome kind 
        of street foodSome kind of street foodSome kind of street food`,
        null,
        null,
        null
      )
    ];
  }
}
