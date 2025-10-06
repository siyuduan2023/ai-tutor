import { Component, computed, input, signal, effect, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkModel } from '../../models';
import { Drink } from '../../drink';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css'
})
export class RecipeDetail {
  private readonly route = inject(ActivatedRoute);
  protected readonly drinkService = inject(Drink);
  protected readonly drink = signal<DrinkModel | undefined>(undefined);
  // readonly drink = input.required<DrinkModel>();
  protected readonly imgUrl = computed(() => {
    return this.drink()!.imgUrl;
  });
  protected serving = signal(1);

  protected adjustedIngredients = computed(() => {
    const ingredients = this.drink()!.ingredients.map(ingredients => {
      return {
        name: ingredients.name,
        quantity: ingredients.quantity * this.serving(),
        unit: ingredients.unit
      }
    })
    return ingredients;
  });
  
  constructor() {
    const drinkId = this.route.snapshot.paramMap.get('id');
    if (drinkId) {
      // Find the product using the service and set our signal
      const foundProduct = this.drinkService.getDrinkById(+drinkId);
      this.drink.set(foundProduct);
    }
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
