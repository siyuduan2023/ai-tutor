import { Component, computed, signal } from '@angular/core';
import { DrinkModel } from '../models';
import { MOCK_DRINKS } from '../mock-recipes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  imports: [CommonModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  protected drink = signal<DrinkModel>({} as DrinkModel);
  protected readonly imgUrl = computed(() => {
    return this.drink().imgUrl;
  });
  protected serving = signal(1);
  protected adjustedIngredients = computed(() => {
    const ingredients = this.drink().ingredients.map(ingredients => {
      return {
        name: ingredients.name,
        quantity: ingredients.quantity * this.serving(),
        unit: ingredients.unit
      }
    })
    return ingredients;
  });

  protected selectDrink(id: number): void {
    const selectedDrink = MOCK_DRINKS.find(d => d.id === id);
    if (selectedDrink) {
      this.drink.set(selectedDrink);
      this.serving.set(1);
    }
  }

  protected increase(){
      this.serving.update(serving => serving + 1); 
  }

  protected decrease(){
    if (this.serving() <= 1) {
      this.serving.set(1); 
    } else {
      this.serving.update(serving => serving - 1);
    }
  }
}
