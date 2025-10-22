
import { Component, computed, signal, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkModel } from '../../models';
import { Drink } from '../../drink';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-drink-detail',
  imports: [DecimalPipe],
  templateUrl: './drink-detail.html',
  styleUrl: './drink-detail.css'
})
export class DrinkDetail {
  private readonly route = inject(ActivatedRoute);
  protected readonly drinkService = inject(Drink);
  protected readonly drink = signal<DrinkModel | undefined>(undefined);

  protected readonly imgUrl = computed(() => this.drink()?.imgUrl);
  protected serving = signal(1);

  protected adjustedIngredients = computed(() => {
    const drink = this.drink();
    if (!drink) return [];

    return drink.ingredients.map(ingredient => ({
      ...ingredient,
      quantity: ingredient.quantity * this.serving(),
    }));
  });

  constructor() {
    const drinkId = this.route.snapshot.paramMap.get('id');
    if (drinkId) {
      const foundProduct = this.drinkService.getDrinkById(+drinkId);
      this.drink.set(foundProduct);
    }
  }

  protected increase() {
    this.serving.update(serving => serving + 1);
  }

  protected decrease() {
    if (this.serving() > 1) {
      this.serving.update(serving => serving - 1);
    }
  }
}
