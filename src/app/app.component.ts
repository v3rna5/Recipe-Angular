import { Component } from '@angular/core';
import { Recipe } from './Models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Book';
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipes: Recipe[] = [
    new Recipe(
      'Picadillo',

      'Combine the turkey, lemon juice and wine in a bowl and mix well. Marinate, covered with plastic wrap, in the refrigerator for 1 hour. Saute the onion, bell pepper and garlic in the olive oil in a skiller for 3 minutes. Add the turkey mixture and mix well. Cook for 5 minutes over medium hear, stirring constantly. Stir in the tomato sauce, raisins, olives, capers, Worcestershire sauce and pepper; reduce heat. Simmer, covered for 25 minutes stirring occasionally. Spoon the picadillo over hot cooked rice on dinner plates. You may also use as a stuffing for eggplant, mirlitons or bell peppers.',

      '1 pound of ground turkey (I used turkey sausage @ .99 a package!): 1/4 cup fresh lemon juice (I used reconstituted lemon juice): 3 T white wine: 1 cup finely chopped yellow onion: 1 small green bell pepper, finely chopped: 3 garlic cloves, minced: 2 T olive oil: 1 (8 oz.) can tomato sauce: 1/2 cup loosely packed raisins: 1/2 cup drained pimento-stuffed green olives: 1 T capers: 1 T Worcestershire sauce: Freshly ground pepper to taste'),
  ];
}
