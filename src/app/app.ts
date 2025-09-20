/*!
 * @license
 * Copyright 2025 Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import {Component, computed, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DrinkModel} from './models';
import { MOCK_DRINKS } from './mock-recipes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected title = 'myapp';
  protected readonly title = signal('The Remote Bar');

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
