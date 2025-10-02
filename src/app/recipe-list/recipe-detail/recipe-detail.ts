import { Component, computed, input, signal, effect } from '@angular/core';
import { DrinkModel } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css'
})
export class RecipeDetail {
  readonly drink = input.required<DrinkModel>();
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
  
  constructor() {
    effect(() => {
      this.drink();
      this.serving.set(1);
    })
  }

  protected increase() {
    this.serving.update(serving => serving + 1);
  }

  protected decrease() {
    if (this.serving() <= 1) {
      this.serving.set(1);
    } else {
      this.serving.update(serving => serving - 1);
    }
  }
}
