import { Component, signal } from '@angular/core';
import { DrinkModel } from '../models';
import { MOCK_DRINKS } from '../mock-recipes';
import { CommonModule } from '@angular/common';
import { RecipeDetail } from './recipe-detail/recipe-detail';

@Component({
  selector: 'app-recipe-list',
  imports: [CommonModule, RecipeDetail],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  protected drink = signal<DrinkModel>({} as DrinkModel);

  protected selectDrink(id: number): void {
    const selectedDrink = MOCK_DRINKS.find(d => d.id === id);
    if (selectedDrink) {
      this.drink.set(selectedDrink);
    }
  }
}
