import { Component } from '@angular/core';
import { Recipe } from './model/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipe: Recipe;

  constructor() {
    this.recipe = new Recipe('Honana Bread' , 'This is a banana bread', null, null, null);
  }

}
