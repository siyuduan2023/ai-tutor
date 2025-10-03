import { Component, computed, signal } from '@angular/core';
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
  protected drink = signal<DrinkModel>({} as DrinkModel);
  protected drinks = signal(MOCK_DRINKS);
  protected searchTerm = signal('');
  protected filteredDrinks = computed(() => {
    const searchText = this.searchTerm().toLowerCase();
    
    if (!searchText) {
      return this.drinks();
    }
    
    return this.drinks().filter(drink => {
      return drink.name.toLowerCase().includes(searchText);
    })
  });

  protected selectDrink(id: number): void {
    const selectedDrink = MOCK_DRINKS.find(d => d.id === id);
    if (selectedDrink) {
      this.drink.set(selectedDrink);
    }
  }
}
