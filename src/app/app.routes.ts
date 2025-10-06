/*!
 * @license
 * Copyright 2025 Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import {Routes} from '@angular/router';
import { DrinkList } from './drink-list/drink-list';
import { RecipeDetail } from './drink-list/drink-detail/drink-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'drink', pathMatch: 'full' },
  { path: 'drink', component: DrinkList },
  { path: 'drink/:id', component: RecipeDetail },
];
