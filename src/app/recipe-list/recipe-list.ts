import { Component, computed, signal, inject } from '@angular/core';
import { Drink } from '../drink';
import { DrinkModel } from '../models';
import { MOCK_DRINKS } from '../mock-recipes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeDetail } from './recipe-detail/recipe-detail';

@Component({
  selector: 'app-recipe-list',
  imports: [CommonModule, RecipeDetail, FormsModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  protected readonly drinkService = inject(Drink);

  protected drink = signal<DrinkModel>({} as DrinkModel);
  protected searchTerm = signal('');
  protected filteredDrinks = computed(() => {
    const searchText = this.searchTerm().toLowerCase();
    
    if (!searchText) {
      return this.drinkService.getDrinks();
    }
    
    return this.drinkService.getDrinks().filter(drink => {
      return drink.name.toLowerCase().includes(searchText);
    })
  });

  protected selectDrink(id: number): void {
    const selectedDrink = this.drinkService.getDrinkById(id);
    if (selectedDrink) {
      this.drink.set(selectedDrink);
    }
  }
}
