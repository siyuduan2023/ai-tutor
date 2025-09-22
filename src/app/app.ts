/*!
 * @license
 * Copyright 2025 Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipeList } from './recipe-list/recipe-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RecipeList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected title = 'myapp';
  protected readonly title = signal('The Remote Bar');
}
