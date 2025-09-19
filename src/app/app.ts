/*!
 * @license
 * Copyright 2025 Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import {Component, computed, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RecipeModel} from './models';
import { MOCK_RECIPES } from './mock-recipes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected title = 'myapp';
  protected readonly title = signal('My Recipe Box');

  protected recipe = signal<RecipeModel>({} as RecipeModel);
  protected serving = signal(1);
  protected adjustedIngredients = computed(() => {
    const ingredients = this.recipe().ingredients.map(ingredients => {
      return {
        name: ingredients.name,
        quantity: ingredients.quantity * this.serving(),
        unit: ingredients.unit
      }
    })
    return ingredients;
  });

  protected clickButton1() {
    console.log('Button 1 clicked');
    const spaghetti = MOCK_RECIPES.find(recipe => recipe.id === 1);
    if (spaghetti) {
      this.recipe.set(spaghetti);
    }
  }

  protected clickButton2() {
    console.log('Button 2 clicked');
    this.recipe.set(MOCK_RECIPES[1]);
  }

  protected increase(){
    this.serving.update(serving => serving + 1);
  }

  protected decrease(){
    this.serving.update(serving => serving - 1);
    }

  
}
